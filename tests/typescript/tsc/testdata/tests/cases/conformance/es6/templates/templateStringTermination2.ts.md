__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "\\\\",
              "cooked": "\\"
            },
            "tail": true,
            "start": 0,
            "end": 4
          }
        ],
        "expressions": [],
        "start": 0,
        "end": 4
      },
      "directive": null,
      "start": 0,
      "end": 4
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Template",
    "value": "`\\\\`",
    "start": 0,
    "end": 4
  }
]
```
