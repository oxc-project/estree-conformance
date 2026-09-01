__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "abc",
              "cooked": "abc"
            },
            "tail": false,
            "start": 7,
            "end": 13
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "abc",
              "cooked": "abc"
            },
            "tail": true,
            "start": 14,
            "end": 19
          }
        ],
        "expressions": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 13,
            "end": 14
          }
        ],
        "start": 7,
        "end": 19
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "def",
                    "cooked": "def"
                  },
                  "tail": false,
                  "start": 27,
                  "end": 33
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "def",
                    "cooked": "def"
                  },
                  "tail": true,
                  "start": 34,
                  "end": 39
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 33,
                  "end": 34
                }
              ],
              "start": 27,
              "end": 39
            },
            "directive": null,
            "start": 27,
            "end": 40
          }
        ],
        "start": 21,
        "end": 42
      },
      "start": 0,
      "end": 42
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 42
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "while",
    "start": 0,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6,
    "end": 7
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 7,
    "end": 13
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 13,
    "end": 14
  },
  {
    "type": "Template",
    "value": "}abc`",
    "start": 14,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Template",
    "value": "`def${",
    "start": 27,
    "end": 33
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 33,
    "end": 34
  },
  {
    "type": "Template",
    "value": "}def`",
    "start": 34,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  }
]
```
