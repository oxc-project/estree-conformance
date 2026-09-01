__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 11,
        "end": 15
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 43,
                "end": 44
              },
              "start": 37,
              "end": 44
            },
            "directive": null,
            "start": 37,
            "end": 45
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 69,
                "end": 70
              },
              "start": 50,
              "end": 70
            },
            "directive": null,
            "start": 50,
            "end": 71
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 82,
                "end": 83
              },
              "start": 76,
              "end": 83
            },
            "directive": null,
            "start": 76,
            "end": 83
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 122,
                    "end": 123
                  }
                ],
                "start": 121,
                "end": 124
              },
              "start": 101,
              "end": 124
            },
            "directive": null,
            "start": 101,
            "end": 125
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 151,
                    "end": 152
                  }
                ],
                "start": 150,
                "end": 153
              },
              "start": 130,
              "end": 153
            },
            "directive": null,
            "start": 130,
            "end": 154
          }
        ],
        "start": 18,
        "end": 156
      },
      "expression": false,
      "start": 0,
      "end": 156
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 156
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 11,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 37,
    "end": 42
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 50,
    "end": 55
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 76,
    "end": 81
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 101,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 121,
    "end": 122
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 130,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 150,
    "end": 151
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  }
]
```
