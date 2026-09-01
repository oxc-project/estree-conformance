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
              "raw": "\n\\\n",
              "cooked": "\n"
            },
            "tail": true,
            "start": 25,
            "end": 30
          }
        ],
        "expressions": [],
        "start": 25,
        "end": 30
      },
      "directive": null,
      "start": 25,
      "end": 30
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 25,
  "end": 30
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Template",
    "value": "`\n\\\n`",
    "start": 25,
    "end": 30
  }
]
```
