__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false,
              "start": 0,
              "end": 6
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": true,
              "start": 7,
              "end": 12
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 6,
              "end": 7
            }
          ],
          "start": 0,
          "end": 12
        },
        "property": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "0",
                "cooked": "0"
              },
              "tail": true,
              "start": 13,
              "end": 16
            }
          ],
          "expressions": [],
          "start": 13,
          "end": 16
        },
        "optional": false,
        "computed": true,
        "start": 0,
        "end": 17
      },
      "directive": null,
      "start": 0,
      "end": 18
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 18
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Template",
    "value": "`abc${",
    "start": 0,
    "end": 6
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 6,
    "end": 7
  },
  {
    "type": "Template",
    "value": "}abc`",
    "start": 7,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 12,
    "end": 13
  },
  {
    "type": "Template",
    "value": "`0`",
    "start": 13,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18
  }
]
```
