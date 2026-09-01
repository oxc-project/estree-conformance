__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "Literal",
            "value": "X",
            "raw": "\"X\"",
            "start": 10,
            "end": 13
          },
          "definite": false,
          "start": 6,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 21
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 27
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 31,
                      "end": 32
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "value of b",
                          "raw": "\"value of b\"",
                          "start": 35,
                          "end": 47
                        },
                        "start": 35,
                        "end": 47
                      },
                      "start": 33,
                      "end": 47
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 31,
                    "end": 48
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "notNecessary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 49,
                      "end": 61
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "u",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 70,
                          "end": 71
                        },
                        "typeArguments": null,
                        "start": 63,
                        "end": 71
                      },
                      "start": 61,
                      "end": 71
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 49,
                    "end": 71
                  }
                ],
                "start": 29,
                "end": 73
              },
              "start": 27,
              "end": 73
            },
            "accessibility": null,
            "static": false,
            "start": 26,
            "end": 73
          }
        ],
        "start": 24,
        "end": 74
      },
      "declare": false,
      "start": 15,
      "end": 74
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 82
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 87,
                    "end": 88
                  },
                  "value": {
                    "type": "Literal",
                    "value": "value of a",
                    "raw": "\"value of a\"",
                    "start": 90,
                    "end": 102
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 87,
                  "end": 102
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "notNecessary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 104,
                    "end": 116
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 119
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 104,
                  "end": 119
                }
              ],
              "start": 85,
              "end": 121
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 130
              },
              "typeArguments": null,
              "start": 125,
              "end": 130
            },
            "start": 85,
            "end": 130
          },
          "definite": false,
          "start": 81,
          "end": 130
        }
      ],
      "declare": false,
      "start": 75,
      "end": 130
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o1",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 148
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 155,
                            "end": 156
                          },
                          "typeArguments": null,
                          "start": 155,
                          "end": 156
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'",
                            "start": 157,
                            "end": 160
                          },
                          "start": 157,
                          "end": 160
                        },
                        "start": 155,
                        "end": 161
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "'b'",
                          "start": 162,
                          "end": 165
                        },
                        "start": 162,
                        "end": 165
                      },
                      "start": 155,
                      "end": 166
                    },
                    "start": 153,
                    "end": 166
                  },
                  "start": 152,
                  "end": 166
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 171,
                "end": 173
              },
              "id": null,
              "generator": false,
              "start": 151,
              "end": 173
            },
            "definite": false,
            "start": 146,
            "end": 173
          }
        ],
        "declare": false,
        "start": 140,
        "end": 173
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 133,
      "end": 173
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 190
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 205,
                          "end": 206
                        },
                        "typeArguments": null,
                        "start": 198,
                        "end": 206
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "'a'",
                          "start": 208,
                          "end": 211
                        },
                        "start": 208,
                        "end": 211
                      },
                      "start": 197,
                      "end": 212
                    },
                    "start": 195,
                    "end": 212
                  },
                  "start": 194,
                  "end": 212
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 217,
                "end": 219
              },
              "id": null,
              "generator": false,
              "start": 193,
              "end": 219
            },
            "definite": false,
            "start": 188,
            "end": 219
          }
        ],
        "declare": false,
        "start": 182,
        "end": 219
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 175,
      "end": 219
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 235
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 250,
                          "end": 251
                        },
                        "typeArguments": null,
                        "start": 243,
                        "end": 251
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "'a'",
                          "start": 252,
                          "end": 255
                        },
                        "start": 252,
                        "end": 255
                      },
                      "start": 243,
                      "end": 256
                    },
                    "start": 240,
                    "end": 256
                  },
                  "start": 239,
                  "end": 256
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 261,
                "end": 263
              },
              "id": null,
              "generator": false,
              "start": 238,
              "end": 263
            },
            "definite": false,
            "start": 233,
            "end": 263
          }
        ],
        "declare": false,
        "start": 227,
        "end": 263
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 220,
      "end": 263
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o4",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 280
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 294,
                            "end": 295
                          },
                          "typeArguments": null,
                          "start": 294,
                          "end": 295
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'",
                            "start": 296,
                            "end": 299
                          },
                          "start": 296,
                          "end": 299
                        },
                        "start": 294,
                        "end": 300
                      },
                      "start": 287,
                      "end": 301
                    },
                    "start": 285,
                    "end": 301
                  },
                  "start": 284,
                  "end": 301
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 306,
                "end": 308
              },
              "id": null,
              "generator": false,
              "start": 283,
              "end": 308
            },
            "definite": false,
            "start": 278,
            "end": 308
          }
        ],
        "declare": false,
        "start": 272,
        "end": 308
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 265,
      "end": 308
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 309
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "String",
    "value": "\"X\"",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 15,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "String",
    "value": "\"value of b\"",
    "start": 35,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "notNecessary",
    "start": 49,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 63,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 75,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "String",
    "value": "\"value of a\"",
    "start": 90,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "notNecessary",
    "start": 104,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 122,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 125,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 133,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 140,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 146,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 156,
    "end": 157
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 157,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 161,
    "end": 162
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 162,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 168,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 175,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 182,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 188,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 198,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 207,
    "end": 208
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 208,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 214,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 220,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 227,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 233,
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
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 243,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 251,
    "end": 252
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 252,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 258,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 265,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 272,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 278,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 287,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 295,
    "end": 296
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 296,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 303,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./decl",
        "raw": "'./decl'",
        "start": 20,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 44
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 51,
                    "end": 52
                  },
                  "start": 48,
                  "end": 52
                }
              ],
              "start": 47,
              "end": 53
            },
            "definite": false,
            "start": 43,
            "end": 53
          }
        ],
        "declare": false,
        "start": 37,
        "end": 53
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 30,
      "end": 53
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 53
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 15,
    "end": 19
  },
  {
    "type": "String",
    "value": "'./decl'",
    "start": 20,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 37,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 48,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  }
]
```
