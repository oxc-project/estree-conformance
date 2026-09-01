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
              "raw": "\r\\\r",
              "cooked": "\n"
            },
            "tail": true,
            "start": 23,
            "end": 28
          }
        ],
        "expressions": [],
        "start": 23,
        "end": 28
      },
      "directive": null,
      "start": 23,
      "end": 28
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 28
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Template",
    "value": "`\r\\\r`",
    "start": 23,
    "end": 28
  }
]
```
