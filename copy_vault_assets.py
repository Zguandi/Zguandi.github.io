#!/usr/bin/env python3
from pathlib import Path
import re, shutil

VAULT_ROOT   = Path("_notes")
ASSET_DEST   = Path("assets/pictures")   # tweak if you prefer /img/…

img_pat = re.compile(r'!\[\[(.+?)\]\]')     # matches Obsidian image embeds

for md in VAULT_ROOT.rglob("*.md"):
    text = md.read_text(encoding="utf-8")

    def repl(match):
        fname = match.group(1)
        src   = md.parent / fname
        dest  = ASSET_DEST / fname
        dest.parent.mkdir(parents=True, exist_ok=True)
        if src.exists():
            shutil.copy2(src, dest)
        # rewrite embed → standard Markdown
        return f'![{dest.stem}](/assets/pictures/{fname})'

    new_text = img_pat.sub(repl, text)
    md.write_text(new_text, encoding="utf-8")
