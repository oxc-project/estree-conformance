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
                "name": "DurationFormat",
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
            "arguments": [
              {
                "type": "Literal",
                "value": "en",
                "raw": "'en'",
                "start": 24,
                "end": 28
              }
            ],
            "start": 0,
            "end": 29
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 36
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 36
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "years",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 41,
                  "end": 46
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 48,
                  "end": 49
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 41,
                "end": 49
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hours",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 58
                },
                "value": {
                  "type": "Literal",
                  "value": 20,
                  "raw": "20",
                  "start": 60,
                  "end": 62
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 53,
                "end": 62
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "minutes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 66,
                  "end": 73
                },
                "value": {
                  "type": "Literal",
                  "value": 15,
                  "raw": "15",
                  "start": 75,
                  "end": 77
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 66,
                "end": 77
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "seconds",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 88
                },
                "value": {
                  "type": "Literal",
                  "value": 35,
                  "raw": "35",
                  "start": 90,
                  "end": 92
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 81,
                "end": 92
              }
            ],
            "start": 37,
            "end": 94
          }
        ],
        "optional": false,
        "start": 0,
        "end": 95
      },
      "directive": null,
      "start": 0,
      "end": 96
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 96
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
    "value": "DurationFormat",
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
    "type": "String",
    "value": "'en'",
    "start": 24,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "format",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "years",
    "start": 41,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Identifier",
    "value": "hours",
    "start": 53,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 60,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "minutes",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Numeric",
    "value": "15",
    "start": 75,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "seconds",
    "start": 81,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Numeric",
    "value": "35",
    "start": 90,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  }
]
```
