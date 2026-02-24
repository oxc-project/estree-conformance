__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 226,
            "end": 227
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/\\u{DC00}/gu",
            "regex": {
              "pattern": "\\u{DC00}",
              "flags": "gu"
            },
            "start": 230,
            "end": 242
          },
          "definite": false,
          "start": 226,
          "end": 242
        }
      ],
      "declare": false,
      "start": 222,
      "end": 243
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 222,
  "end": 243
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 222,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 228,
    "end": 229
  },
  {
    "type": "RegularExpression",
    "value": "/\\u{DC00}/gu",
    "regex": {
      "flags": "gu",
      "pattern": "\\u{DC00}"
    },
    "start": 230,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  }
]
```
