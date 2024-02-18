# kanji2hiragana-map

Pre-built kanji -> hiragana resolution map.

The map can easily be imported in an ESM program:

```js
import k2hmap from 'kanji2hiragana-map' with {type: 'json'};

k2hmap['家']; // いえ
```

(use `assert` instead of `with` if your development environment doesn't understand the latter.)

## Known limitations

- **This is not an exhaustive map!** It was built from various semi-valid sources and many entries are probably missing from it.
- It's a binary map, and only the most commonly used hiragana for a kanji are mapped (for instance 家 can be written いえ and うち but いえ is used because it appears more often in the literature).
