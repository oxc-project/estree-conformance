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
                "name": "formatToParts",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 39
              },
              "optional": false,
              "computed": false,
              "start": 0,
              "end": 39
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 0,
            "end": 41
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "find",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 46
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 46
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 51
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 59
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 64
                },
                "optional": false,
                "computed": false,
                "start": 56,
                "end": 64
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "fractionalSecond",
                "raw": "'fractionalSecond'",
                "start": 69,
                "end": 87
              },
              "start": 56,
              "end": 87
            },
            "id": null,
            "generator": false,
            "start": 47,
            "end": 87
          }
        ],
        "optional": false,
        "start": 0,
        "end": 88
      },
      "directive": null,
      "start": 0,
      "end": 88
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 88
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
    "value": "formatToParts",
    "start": 26,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "find",
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
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 53,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 56,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 60,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 65,
    "end": 68
  },
  {
    "type": "String",
    "value": "'fractionalSecond'",
    "start": 69,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 87,
    "end": 88
  }
]
```
