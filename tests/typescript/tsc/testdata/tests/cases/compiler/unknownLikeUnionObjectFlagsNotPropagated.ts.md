__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyType",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 57
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 60,
            "end": 62
          },
          {
            "type": "TSNullKeyword",
            "start": 65,
            "end": 69
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 72,
            "end": 81
          }
        ],
        "start": 60,
        "end": 81
      },
      "declare": false,
      "start": 46,
      "end": 82
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "myVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 103
                },
                "typeArguments": null,
                "start": 97,
                "end": 103
              },
              "start": 95,
              "end": 103
            },
            "start": 90,
            "end": 103
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 106,
              "end": 110
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyType",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 120
              },
              "typeArguments": null,
              "start": 114,
              "end": 120
            },
            "start": 106,
            "end": 120
          },
          "definite": false,
          "start": 90,
          "end": 120
        }
      ],
      "declare": false,
      "start": 84,
      "end": 121
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "myVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 128
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 144
          },
          "optional": true,
          "computed": false,
          "start": 123,
          "end": 144
        },
        "start": 123,
        "end": 144
      },
      "directive": null,
      "start": 123,
      "end": 145
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "myVar",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 151
      },
      "directive": null,
      "start": 146,
      "end": 152
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myUnusedFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 185
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fetch1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 200,
                  "end": 206
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 209,
                      "end": 216
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 217,
                      "end": 224
                    },
                    "optional": false,
                    "computed": false,
                    "start": 209,
                    "end": 224
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "'hello'",
                          "start": 226,
                          "end": 233
                        },
                        {
                          "type": "Literal",
                          "value": "world",
                          "raw": "'world'",
                          "start": 235,
                          "end": 242
                        }
                      ],
                      "start": 225,
                      "end": 243
                    }
                  ],
                  "optional": false,
                  "start": 209,
                  "end": 244
                },
                "definite": false,
                "start": 200,
                "end": 244
              }
            ],
            "declare": false,
            "start": 194,
            "end": 245
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
                      "name": "data1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 257,
                      "end": 262
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 263
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 272,
                        "end": 279
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "all",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 280,
                        "end": 283
                      },
                      "optional": false,
                      "computed": false,
                      "start": 272,
                      "end": 283
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fetch1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 285,
                            "end": 291
                          }
                        ],
                        "start": 284,
                        "end": 292
                      }
                    ],
                    "optional": false,
                    "start": 272,
                    "end": 293
                  },
                  "start": 266,
                  "end": 293
                },
                "definite": false,
                "start": 256,
                "end": 293
              }
            ],
            "declare": false,
            "start": 250,
            "end": 294
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "data1",
                "optional": false,
                "typeAnnotation": null,
                "start": 299,
                "end": 304
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 305,
                "end": 311
              },
              "optional": false,
              "computed": false,
              "start": 299,
              "end": 311
            },
            "directive": null,
            "start": 299,
            "end": 312
          }
        ],
        "start": 188,
        "end": 314
      },
      "expression": false,
      "start": 154,
      "end": 314
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 46,
  "end": 314
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 46,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "MyType",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 63,
    "end": 64
  },
  {
    "type": "Null",
    "value": "null",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 72,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 84,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "myVar",
    "start": 90,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "MyType",
    "start": 97,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 104,
    "end": 105
  },
  {
    "type": "Null",
    "value": "null",
    "start": 106,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 111,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "MyType",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "myVar",
    "start": 123,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 128,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 130,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "myVar",
    "start": 146,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 154,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 160,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "myUnusedFunction",
    "start": 169,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 194,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "fetch1",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 209,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 217,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 225,
    "end": 226
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 226,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 233,
    "end": 234
  },
  {
    "type": "String",
    "value": "'world'",
    "start": 235,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 250,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "data1",
    "start": 257,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 266,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 272,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 280,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "fetch1",
    "start": 285,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "data1",
    "start": 299,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 305,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314
  }
]
```
