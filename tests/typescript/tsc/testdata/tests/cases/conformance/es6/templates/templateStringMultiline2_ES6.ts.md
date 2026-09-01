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
            "start": 21,
            "end": 26
          }
        ],
        "expressions": [],
        "start": 21,
        "end": 26
      },
      "directive": null,
      "start": 21,
      "end": 26
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 26
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Template",
    "value": "`\n\\\n`",
    "start": 21,
    "end": 26
  }
]
```
