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
              "raw": " /**head  ",
              "cooked": " /**head  "
            },
            "tail": false,
            "start": 0,
            "end": 13
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " // still middle  ",
              "cooked": " // still middle  "
            },
            "tail": false,
            "start": 17,
            "end": 38
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " /* still tail ",
              "cooked": " /* still tail "
            },
            "tail": true,
            "start": 42,
            "end": 59
          }
        ],
        "expressions": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 14,
            "end": 16
          },
          {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 39,
            "end": 41
          }
        ],
        "start": 0,
        "end": 59
      },
      "directive": null,
      "start": 0,
      "end": 59
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 59
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Template",
    "value": "` /**head  ${",
    "start": 0,
    "end": 13
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 14,
    "end": 16
  },
  {
    "type": "Template",
    "value": "} // still middle  ${",
    "start": 17,
    "end": 38
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 39,
    "end": 41
  },
  {
    "type": "Template",
    "value": "} /* still tail `",
    "start": 42,
    "end": 59
  }
]
```
