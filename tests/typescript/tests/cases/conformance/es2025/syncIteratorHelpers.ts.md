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
                            "value": 1,
                            "raw": "1",
                            "start": 1,
                            "end": 2
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 4,
                            "end": 5
                          },
                          {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 7,
                            "end": 8
                          },
                          {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 10,
                            "end": 11
                          }
                        ],
                        "start": 0,
                        "end": 12
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "values",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 13,
                        "end": 19
                      },
                      "optional": false,
                      "computed": false,
                      "start": 0,
                      "end": 19
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 0,
                    "end": 21
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 27,
                    "end": 33
                  },
                  "optional": false,
                  "computed": false,
                  "start": 0,
                  "end": 33
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 35,
                        "end": 36
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 41,
                          "end": 42
                        },
                        "operator": "%",
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 45,
                          "end": 46
                        },
                        "start": 41,
                        "end": 46
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 51,
                        "end": 52
                      },
                      "start": 41,
                      "end": 52
                    },
                    "id": null,
                    "generator": false,
                    "start": 34,
                    "end": 52
                  }
                ],
                "optional": false,
                "start": 0,
                "end": 53
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 62
              },
              "optional": false,
              "computed": false,
              "start": 0,
              "end": 62
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 65
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 70,
                    "end": 71
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 74,
                    "end": 76
                  },
                  "start": 70,
                  "end": 76
                },
                "id": null,
                "generator": false,
                "start": 63,
                "end": 76
              }
            ],
            "optional": false,
            "start": 0,
            "end": 77
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 90
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 90
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 0,
        "end": 92
      },
      "directive": null,
      "start": 0,
      "end": 93
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 93
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
    "type": "Numeric",
    "value": "1",
    "start": 1,
    "end": 2
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2,
    "end": 3
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5,
    "end": 6
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8,
    "end": 9
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 13,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 38,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 43,
    "end": 44
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 47,
    "end": 50
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 59,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 67,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 72,
    "end": 73
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 74,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "toArray",
    "start": 83,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  }
]
```
