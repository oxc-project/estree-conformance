__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 64
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "\\\\0041",
                  "cooked": "\\0041"
                },
                "tail": true,
                "start": 67,
                "end": 75
              }
            ],
            "expressions": [],
            "start": 67,
            "end": 75
          },
          "definite": false,
          "start": 62,
          "end": 75
        }
      ],
      "declare": false,
      "start": 56,
      "end": 76
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 76
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 62,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66
  },
  {
    "type": "Template",
    "value": "`\\\\0041`",
    "start": 67,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  }
]
```
