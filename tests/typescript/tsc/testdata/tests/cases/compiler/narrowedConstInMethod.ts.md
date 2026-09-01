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
        "start": 44,
        "end": 45
      },
      "generator": false,
      "async": false,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 63,
                          "end": 69
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 72,
                          "end": 76
                        }
                      ],
                      "start": 63,
                      "end": 76
                    },
                    "start": 61,
                    "end": 76
                  },
                  "start": 60,
                  "end": 76
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 80,
                    "end": 83
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 84,
                    "end": 86
                  },
                  "start": 79,
                  "end": 86
                },
                "definite": false,
                "start": 60,
                "end": 86
              }
            ],
            "declare": false,
            "start": 54,
            "end": 87
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 97
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 102,
                "end": 106
              },
              "start": 96,
              "end": 106
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 139,
                          "end": 142
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 154,
                                    "end": 155
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "length",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 156,
                                    "end": 162
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 154,
                                  "end": 162
                                },
                                "start": 147,
                                "end": 163
                              }
                            ],
                            "start": 145,
                            "end": 165
                          },
                          "expression": false,
                          "start": 142,
                          "end": 165
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 139,
                        "end": 165
                      }
                    ],
                    "start": 125,
                    "end": 182
                  },
                  "start": 118,
                  "end": 183
                }
              ],
              "start": 108,
              "end": 189
            },
            "alternate": null,
            "start": 92,
            "end": 189
          }
        ],
        "start": 48,
        "end": 191
      },
      "expression": false,
      "start": 35,
      "end": 191
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 202,
        "end": 204
      },
      "generator": false,
      "async": false,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 222,
                          "end": 228
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 231,
                          "end": 235
                        }
                      ],
                      "start": 222,
                      "end": 235
                    },
                    "start": 220,
                    "end": 235
                  },
                  "start": 219,
                  "end": 235
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 239,
                    "end": 242
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 243,
                    "end": 245
                  },
                  "start": 238,
                  "end": 245
                },
                "definite": false,
                "start": 219,
                "end": 245
              }
            ],
            "declare": false,
            "start": 213,
            "end": 246
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 256
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 261,
                "end": 265
              },
              "start": 255,
              "end": 265
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ClassExpression",
                    "decorators": [],
                    "id": null,
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 304,
                            "end": 307
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 319,
                                      "end": 320
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 321,
                                      "end": 327
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 319,
                                    "end": 327
                                  },
                                  "start": 312,
                                  "end": 328
                                }
                              ],
                              "start": 310,
                              "end": 330
                            },
                            "expression": false,
                            "start": 307,
                            "end": 330
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 304,
                          "end": 330
                        }
                      ],
                      "start": 290,
                      "end": 347
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 284,
                    "end": 347
                  },
                  "start": 277,
                  "end": 348
                }
              ],
              "start": 267,
              "end": 354
            },
            "alternate": null,
            "start": 251,
            "end": 354
          }
        ],
        "start": 207,
        "end": 356
      },
      "expression": false,
      "start": 193,
      "end": 356
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 356
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 35,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 54,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 70,
    "end": 71
  },
  {
    "type": "Null",
    "value": "null",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 92,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 98,
    "end": 101
  },
  {
    "type": "Null",
    "value": "null",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 147,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 156,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 193,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 213,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 222,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 229,
    "end": 230
  },
  {
    "type": "Null",
    "value": "null",
    "start": 231,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 239,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 251,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 257,
    "end": 260
  },
  {
    "type": "Null",
    "value": "null",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 277,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 284,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 304,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 312,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 321,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 355,
    "end": 356
  }
]
```
