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
            "start": 96,
            "end": 97
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "\\u{10FFFF}",
                  "cooked": "􏿿"
                },
                "tail": true,
                "start": 100,
                "end": 112
              }
            ],
            "expressions": [],
            "start": 100,
            "end": 112
          },
          "definite": false,
          "start": 96,
          "end": 112
        }
      ],
      "declare": false,
      "start": 92,
      "end": 113
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 92,
  "end": 113
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 92,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "Template",
    "value": "`\\u{10FFFF}`",
    "start": 100,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  }
]
```
