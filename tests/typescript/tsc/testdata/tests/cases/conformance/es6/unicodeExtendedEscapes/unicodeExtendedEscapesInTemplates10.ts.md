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
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "\\u{D800}",
                  "cooked": "\ud800"
                },
                "tail": true,
                "start": 230,
                "end": 240
              }
            ],
            "expressions": [],
            "start": 230,
            "end": 240
          },
          "definite": false,
          "start": 226,
          "end": 240
        }
      ],
      "declare": false,
      "start": 222,
      "end": 241
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 222,
  "end": 241
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
    "type": "Template",
    "value": "`\\u{D800}`",
    "start": 230,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  }
]
```
