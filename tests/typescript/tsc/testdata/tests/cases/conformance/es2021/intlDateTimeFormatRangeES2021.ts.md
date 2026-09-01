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
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 4,
                "end": 8
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "DateTimeFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 9,
                "end": 23
              },
              "optional": false,
              "computed": false,
              "start": 4,
              "end": 23
            },
            "typeArguments": null,
            "arguments": [],
            "start": 0,
            "end": 25
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "formatRange",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 37
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 37
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 46
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 47,
                "end": 48
              }
            ],
            "start": 38,
            "end": 49
          },
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 59
            },
            "typeArguments": null,
            "arguments": [],
            "start": 51,
            "end": 61
          }
        ],
        "optional": false,
        "start": 0,
        "end": 62
      },
      "directive": null,
      "start": 0,
      "end": 63
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "part",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 76
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 78
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 85,
                    "end": 89
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DateTimeFormat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 90,
                    "end": 104
                  },
                  "optional": false,
                  "computed": false,
                  "start": 85,
                  "end": 104
                },
                "typeArguments": null,
                "arguments": [],
                "start": 81,
                "end": 106
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "formatRangeToParts",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 125
              },
              "optional": false,
              "computed": false,
              "start": 81,
              "end": 125
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1000,
                "raw": "1000",
                "start": 126,
                "end": 130
              },
              {
                "type": "Literal",
                "value": 1000000000,
                "raw": "1000000000",
                "start": 132,
                "end": 142
              }
            ],
            "optional": false,
            "start": 81,
            "end": 143
          },
          "definite": false,
          "start": 70,
          "end": 143
        }
      ],
      "declare": false,
      "start": 64,
      "end": 144
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 144
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "new",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 4,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "DateTimeFormat",
    "start": 9,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "formatRange",
    "start": 26,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 38,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 47,
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
    "value": ",",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 51,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 55,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 64,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "part",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 81,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 85,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "DateTimeFormat",
    "start": 90,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "formatRangeToParts",
    "start": 107,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 126,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131
  },
  {
    "type": "Numeric",
    "value": "1000000000",
    "start": 132,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  }
]
```
