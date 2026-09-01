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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 16
      },
      "generator": false,
      "async": true,
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
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 26,
                "end": 32
              },
              "expression": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 40,
                  "end": 41
                },
                "start": 34,
                "end": 41
              },
              "start": 25,
              "end": 41
            },
            "directive": null,
            "start": 25,
            "end": 42
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 60,
                  "end": 61
                },
                "start": 54,
                "end": 61
              },
              "prefix": true,
              "start": 47,
              "end": 61
            },
            "directive": null,
            "start": 47,
            "end": 62
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 78,
                  "end": 79
                },
                "start": 72,
                "end": 79
              },
              "prefix": true,
              "start": 67,
              "end": 79
            },
            "directive": null,
            "start": 67,
            "end": 80
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 97,
                    "end": 103
                  },
                  "expression": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 113,
                        "end": 119
                      },
                      "expression": {
                        "type": "UnaryExpression",
                        "operator": "void",
                        "argument": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 132,
                            "end": 133
                          },
                          "start": 126,
                          "end": 133
                        },
                        "prefix": true,
                        "start": 121,
                        "end": 133
                      },
                      "start": 112,
                      "end": 133
                    },
                    "prefix": true,
                    "start": 105,
                    "end": 133
                  },
                  "start": 96,
                  "end": 133
                },
                "prefix": true,
                "start": 91,
                "end": 133
              },
              "start": 85,
              "end": 133
            },
            "directive": null,
            "start": 85,
            "end": 134
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 151,
                  "end": 152
                },
                "start": 145,
                "end": 152
              },
              "start": 139,
              "end": 152
            },
            "directive": null,
            "start": 139,
            "end": 153
          }
        ],
        "start": 19,
        "end": 155
      },
      "expression": false,
      "start": 0,
      "end": 155
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 155
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "async",
    "start": 0,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 34,
    "end": 39
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 47,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 54,
    "end": 59
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 67,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 72,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 85,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 91,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 97,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 121,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 126,
    "end": 131
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 139,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 145,
    "end": 150
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  }
]
```
