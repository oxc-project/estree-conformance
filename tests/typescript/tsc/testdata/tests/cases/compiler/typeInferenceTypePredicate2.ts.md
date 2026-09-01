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
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1,
                    "end": 5
                  },
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 7,
                    "end": 11
                  },
                  {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 13,
                    "end": 18
                  },
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 20,
                    "end": 24
                  }
                ],
                "start": 0,
                "end": 25
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
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
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 39,
                    "end": 44
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 47,
                      "end": 52
                    },
                    "asserts": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 56,
                        "end": 63
                      },
                      "start": 56,
                      "end": 63
                    },
                    "start": 47,
                    "end": 63
                  },
                  "start": 45,
                  "end": 63
                },
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 72
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 77,
                    "end": 81
                  },
                  "start": 67,
                  "end": 81
                },
                "id": null,
                "generator": false,
                "start": 38,
                "end": 81
              }
            ],
            "optional": false,
            "start": 0,
            "end": 82
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 91
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 91
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
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 97
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 106
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 115
                },
                "optional": false,
                "computed": false,
                "start": 101,
                "end": 115
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 101,
              "end": 117
            },
            "id": null,
            "generator": false,
            "start": 92,
            "end": 117
          }
        ],
        "optional": false,
        "start": 0,
        "end": 118
      },
      "directive": null,
      "start": 0,
      "end": 119
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 119
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "[",
    "start": 0,
    "end": 1
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5,
    "end": 6
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 7,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11,
    "end": 12
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 13,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 18,
    "end": 19
  },
  {
    "type": "Null",
    "value": "null",
    "start": 20,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 39,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 47,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 53,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 56,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 64,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 67,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 73,
    "end": 76
  },
  {
    "type": "Null",
    "value": "null",
    "start": 77,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 88,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 92,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 98,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 101,
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
    "value": "toString",
    "start": 107,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  }
]
```
