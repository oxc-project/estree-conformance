__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "ResizeObserver",
          "optional": false,
          "typeAnnotation": null,
          "start": 4,
          "end": 18
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
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 26
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 37
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 38,
                "end": 39
              },
              "optional": false,
              "computed": true,
              "start": 30,
              "end": 40
            },
            "id": null,
            "generator": false,
            "start": 19,
            "end": 40
          }
        ],
        "start": 0,
        "end": 41
      },
      "directive": null,
      "start": 0,
      "end": 42
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "MutationObserver",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 63
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
                "name": "records",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 71
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
                  "name": "records",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 82
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "some",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 87
                },
                "optional": false,
                "computed": false,
                "start": 75,
                "end": 87
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
                      "name": "record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 88,
                      "end": 94
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
                        "name": "record",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 98,
                        "end": 104
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "attributeName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 105,
                        "end": 118
                      },
                      "optional": false,
                      "computed": false,
                      "start": 98,
                      "end": 118
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "style",
                      "raw": "\"style\"",
                      "start": 123,
                      "end": 130
                    },
                    "start": 98,
                    "end": 130
                  },
                  "id": null,
                  "generator": false,
                  "start": 88,
                  "end": 130
                }
              ],
              "optional": false,
              "start": 75,
              "end": 131
            },
            "id": null,
            "generator": false,
            "start": 64,
            "end": 131
          }
        ],
        "start": 43,
        "end": 132
      },
      "directive": null,
      "start": 43,
      "end": 133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "IntersectionObserver",
          "optional": false,
          "typeAnnotation": null,
          "start": 138,
          "end": 158
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
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 166
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
                  "name": "entries",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 170,
                  "end": 177
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 185
                },
                "optional": false,
                "computed": false,
                "start": 170,
                "end": 185
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
                      "name": "entry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 186,
                      "end": 191
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "entry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 195,
                      "end": 200
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isIntersecting",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 201,
                      "end": 215
                    },
                    "optional": false,
                    "computed": false,
                    "start": 195,
                    "end": 215
                  },
                  "id": null,
                  "generator": false,
                  "start": 186,
                  "end": 215
                }
              ],
              "optional": false,
              "start": 170,
              "end": 216
            },
            "id": null,
            "generator": false,
            "start": 159,
            "end": 216
          }
        ],
        "start": 134,
        "end": 217
      },
      "directive": null,
      "start": 134,
      "end": 218
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 218
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
    "value": "ResizeObserver",
    "start": 4,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 19,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 27,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 30,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 37,
    "end": 38
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 43,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "MutationObserver",
    "start": 47,
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
    "value": "records",
    "start": 64,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 72,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "records",
    "start": 75,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "some",
    "start": 83,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "record",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 95,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "record",
    "start": 98,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "attributeName",
    "start": 105,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 119,
    "end": 122
  },
  {
    "type": "String",
    "value": "\"style\"",
    "start": 123,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 134,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "IntersectionObserver",
    "start": 138,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 159,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 167,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 170,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 178,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 186,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 192,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 195,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "isIntersecting",
    "start": 201,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  }
]
```
