__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
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
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "hello ",
                  "cooked": "hello "
                },
                "tail": false,
                "start": 13,
                "end": 22
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": " world",
                  "cooked": " world"
                },
                "tail": true,
                "start": 23,
                "end": 31
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 22,
                "end": 23
              }
            ],
            "start": 13,
            "end": 31
          },
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "   ",
                  "cooked": "   "
                },
                "tail": true,
                "start": 33,
                "end": 38
              }
            ],
            "expressions": [],
            "start": 33,
            "end": 38
          },
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "1",
                  "cooked": "1"
                },
                "tail": false,
                "start": 40,
                "end": 44
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "3",
                  "cooked": "3"
                },
                "tail": true,
                "start": 45,
                "end": 48
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 44,
                "end": 45
              }
            ],
            "start": 40,
            "end": 48
          }
        ],
        "optional": false,
        "start": 0,
        "end": 49
      },
      "directive": null,
      "start": 0,
      "end": 50
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 50
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
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 13,
    "end": 22
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 22,
    "end": 23
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 23,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "Template",
    "value": "`   `",
    "start": 33,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Template",
    "value": "`1${",
    "start": 40,
    "end": 44
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 44,
    "end": 45
  },
  {
    "type": "Template",
    "value": "}3`",
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  }
]
```
