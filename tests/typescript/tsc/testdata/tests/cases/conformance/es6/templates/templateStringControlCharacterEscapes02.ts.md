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
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "\\x19\\u0019 19",
                  "cooked": "\u0019\u0019 19"
                },
                "tail": true,
                "start": 8,
                "end": 23
              }
            ],
            "expressions": [],
            "start": 8,
            "end": 23
          },
          "definite": false,
          "start": 4,
          "end": 23
        }
      ],
      "declare": false,
      "start": 0,
      "end": 24
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 24
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Template",
    "value": "`\\x19\\u0019 19`",
    "start": 8,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  }
]
```
