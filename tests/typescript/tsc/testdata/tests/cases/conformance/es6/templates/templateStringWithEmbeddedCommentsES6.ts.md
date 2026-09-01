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
              "raw": "head",
              "cooked": "head"
            },
            "tail": false,
            "start": 0,
            "end": 7
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "\nmiddle",
              "cooked": "\nmiddle"
            },
            "tail": false,
            "start": 34,
            "end": 44
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "\ntail",
              "cooked": "\ntail"
            },
            "tail": true,
            "start": 102,
            "end": 109
          }
        ],
        "expressions": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 31,
            "end": 33
          },
          {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 79,
            "end": 81
          }
        ],
        "start": 0,
        "end": 109
      },
      "directive": null,
      "start": 0,
      "end": 110
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 110
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Template",
    "value": "`head${",
    "start": 0,
    "end": 7
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 31,
    "end": 33
  },
  {
    "type": "Template",
    "value": "}\nmiddle${",
    "start": 34,
    "end": 44
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 79,
    "end": 81
  },
  {
    "type": "Template",
    "value": "}\ntail`",
    "start": 102,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  }
]
```
