#!/usr/bin/env python3
"""Generate Manarix logo lockups with the wordmark converted to outlines.

The wordmark is drawn from Inter Tight (weight 600) so the exported SVG/PNG
assets render identically everywhere without depending on an installed font.

Usage:  python3 scripts/build-logo.py [path/to/inter-tight.woff2]

Requires: fonttools, brotli.
"""

import glob
import sys
from pathlib import Path

from fontTools.misc.transform import Transform
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"

NAVY = "#0B1220"
INK = "#FFFFFF"
ACCENT = "#2563EB"
ACCENT_ON_DARK = "#3B82F6"
MUTED_LIGHT = "#64748B"
MUTED_DARK = "#94A3B8"
TEXT_LIGHT = "#0B1220"
TEXT_DARK = "#F8FAFC"
RULE_LIGHT = "#E2E6EC"

MARK = (
    "M7.5 8H10.9L16 14.2L21.1 8H24.5V22H21.1V13.4L16 19.6L10.9 13.4V22H7.5Z"
)
MARK_RULE = "M7.5 24.8H24.5"

TEXT_X = 68.0


def find_font() -> Path:
    if len(sys.argv) > 1:
        return Path(sys.argv[1])
    for path in sorted(glob.glob(str(ROOT / ".next/static/media/*.woff2"))):
        font = TTFont(path)
        if font["name"].getDebugName(1) != "Inter Tight":
            continue
        cmap = font.getBestCmap()
        if all(ord(c) in cmap for c in "MANARIXSOLUTIONS"):
            return Path(path)
    raise SystemExit(
        "Inter Tight (latin subset) not found. Run `npm run build` first, "
        "or pass a .woff2/.ttf path as an argument."
    )


def outline(font, text: str, size: float, tracking_em: float, baseline: float):
    """Return (svg path data, advance width) for `text` set at `size`."""
    upm = font["head"].unitsPerEm
    glyphs = font.getGlyphSet()
    cmap = font.getBestCmap()
    hmtx = font["hmtx"]

    scale = size / upm
    tracking = tracking_em * size
    x = TEXT_X
    commands = []

    for char in text:
        name = cmap[ord(char)]
        pen = SVGPathPen(glyphs, ntos=lambda v: f"{v:.2f}")
        glyphs[name].draw(TransformPen(pen, Transform(scale, 0, 0, -scale, x, baseline)))
        if data := pen.getCommands():
            commands.append(data)
        x += hmtx[name][0] * scale + tracking

    return " ".join(commands), x - TEXT_X - tracking


def lockup(name_path: str, desc_path: str, width: float, dark: bool) -> str:
    tile = (
        '<rect width="32" height="32" rx="7.5" fill="#FFFFFF" fill-opacity="0.06"/>'
        if dark
        else f'<rect width="32" height="32" rx="7.5" fill="{NAVY}"/>'
    )
    rule = (
        f'<path d="M54 12V36" stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="1"/>'
        if dark
        else f'<path d="M54 12V36" stroke="{RULE_LIGHT}" stroke-width="1"/>'
    )
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width:.0f} 48" fill="none" role="img" aria-label="Manarix Solutions">
  <g transform="translate(0 4) scale(1.25)">
    {tile}
    <path d="{MARK}" fill="{INK}"/>
    <path d="{MARK_RULE}" stroke="{ACCENT_ON_DARK if dark else ACCENT}" stroke-width="1.6" stroke-linecap="square"/>
  </g>
  {rule}
  <path d="{name_path}" fill="{TEXT_DARK if dark else TEXT_LIGHT}"/>
  <path d="{desc_path}" fill="{MUTED_DARK if dark else MUTED_LIGHT}"/>
</svg>
"""


def main() -> None:
    source = find_font()
    font = instancer.instantiateVariableFont(
        TTFont(source), {"wght": 600}, inplace=False
    )

    name_path, name_width = outline(font, "MANARIX", 15.5, 0.055, 24)
    desc_path, _ = outline(font, "SOLUTIONS", 7.5, 0.26, 36)
    width = round(TEXT_X + name_width + 8)

    for filename, dark in [("logo-full.svg", False), ("logo-full-dark.svg", True)]:
        (PUBLIC / filename).write_text(lockup(name_path, desc_path, width, dark))
        print(f"wrote public/{filename}  ({width}×48)")

    print(f"source font: {source}")


if __name__ == "__main__":
    main()
