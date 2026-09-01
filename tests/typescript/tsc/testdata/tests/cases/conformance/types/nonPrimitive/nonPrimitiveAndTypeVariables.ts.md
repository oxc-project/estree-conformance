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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 29
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 30,
            "end": 31
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 33,
            "end": 34
          }
        ],
        "start": 29,
        "end": 35
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 41,
          "end": 42
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 53
            },
            "typeArguments": null,
            "start": 52,
            "end": 53
          },
          "start": 46,
          "end": 53
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 57
              },
              "typeArguments": null,
              "start": 56,
              "end": 57
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 59
              },
              "typeArguments": null,
              "start": 58,
              "end": 59
            },
            "start": 56,
            "end": 60
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 70
            },
            "typeArguments": null,
            "start": 69,
            "end": 70
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 73,
              "end": 74
            },
            "start": 73,
            "end": 74
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 77,
              "end": 78
            },
            "start": 77,
            "end": 78
          },
          "start": 56,
          "end": 78
        },
        "optional": false,
        "readonly": null,
        "start": 38,
        "end": 81
      },
      "declare": false,
      "start": 23,
      "end": 82
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 89
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 90,
            "end": 91
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 94
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 93,
            "end": 94
          }
        ],
        "start": 89,
        "end": 95
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 102
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 113
            },
            "typeArguments": null,
            "start": 112,
            "end": 113
          },
          "start": 106,
          "end": 113
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 117
              },
              "typeArguments": null,
              "start": 116,
              "end": 117
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 119
              },
              "typeArguments": null,
              "start": 118,
              "end": 119
            },
            "start": 116,
            "end": 120
          },
          "extendsType": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 129,
                  "end": 130
                },
                "typeArguments": null,
                "start": 129,
                "end": 130
              },
              {
                "type": "TSObjectKeyword",
                "start": 133,
                "end": 139
              }
            ],
            "start": 129,
            "end": 139
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 142,
              "end": 143
            },
            "start": 142,
            "end": 143
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 146,
              "end": 147
            },
            "start": 146,
            "end": 147
          },
          "start": 116,
          "end": 147
        },
        "optional": false,
        "readonly": null,
        "start": 98,
        "end": 150
      },
      "declare": false,
      "start": 83,
      "end": 151
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 161
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "start": 164,
                            "end": 165
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 167,
                                    "end": 168
                                  },
                                  "start": 167,
                                  "end": 168
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 171,
                                    "end": 172
                                  },
                                  "start": 171,
                                  "end": 172
                                }
                              ],
                              "start": 167,
                              "end": 172
                            },
                            "start": 165,
                            "end": 172
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 164,
                          "end": 172
                        }
                      ],
                      "start": 162,
                      "end": 174
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 176,
                        "end": 177
                      },
                      "start": 176,
                      "end": 177
                    }
                  ],
                  "start": 161,
                  "end": 178
                },
                "start": 160,
                "end": 178
              },
              "start": 158,
              "end": 178
            },
            "start": 157,
            "end": 178
          },
          "init": {
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
                  "start": 183,
                  "end": 184
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 186,
                  "end": 187
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 183,
                "end": 187
              }
            ],
            "start": 181,
            "end": 189
          },
          "definite": false,
          "start": 157,
          "end": 189
        }
      ],
      "declare": false,
      "start": 153,
      "end": 190
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 198,
                  "end": 199
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "start": 202,
                            "end": 203
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 205,
                                    "end": 206
                                  },
                                  "start": 205,
                                  "end": 206
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 209,
                                    "end": 210
                                  },
                                  "start": 209,
                                  "end": 210
                                }
                              ],
                              "start": 205,
                              "end": 210
                            },
                            "start": 203,
                            "end": 210
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 202,
                          "end": 210
                        }
                      ],
                      "start": 200,
                      "end": 212
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 214,
                        "end": 215
                      },
                      "start": 214,
                      "end": 215
                    }
                  ],
                  "start": 199,
                  "end": 216
                },
                "start": 198,
                "end": 216
              },
              "start": 196,
              "end": 216
            },
            "start": 195,
            "end": 216
          },
          "init": {
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
                  "start": 221,
                  "end": 222
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 224,
                  "end": 225
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 221,
                "end": 225
              }
            ],
            "start": 219,
            "end": 227
          },
          "definite": false,
          "start": 195,
          "end": 227
        }
      ],
      "declare": false,
      "start": 191,
      "end": 228
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 242
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 244
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 243,
            "end": 244
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 246,
              "end": 247
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 246,
            "end": 247
          }
        ],
        "start": 242,
        "end": 248
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 253
              },
              "typeArguments": null,
              "start": 252,
              "end": 253
            },
            "start": 250,
            "end": 253
          },
          "start": 249,
          "end": 253
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 268,
                      "end": 274
                    },
                    "start": 266,
                    "end": 274
                  },
                  "start": 265,
                  "end": 274
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 278
                },
                "definite": false,
                "start": 265,
                "end": 278
              }
            ],
            "declare": false,
            "start": 261,
            "end": 279
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 301,
                            "end": 302
                          },
                          "typeArguments": null,
                          "start": 301,
                          "end": 302
                        },
                        {
                          "type": "TSObjectKeyword",
                          "start": 305,
                          "end": 311
                        }
                      ],
                      "start": 301,
                      "end": 311
                    },
                    "start": 299,
                    "end": 311
                  },
                  "start": 298,
                  "end": 311
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 314,
                  "end": 315
                },
                "definite": false,
                "start": 298,
                "end": 315
              }
            ],
            "declare": false,
            "start": 294,
            "end": 316
          }
        ],
        "start": 255,
        "end": 328
      },
      "expression": false,
      "start": 230,
      "end": 328
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 328
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 23,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 43,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 46,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 61,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 71,
    "end": 72
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 83,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 103,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 106,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 121,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 140,
    "end": 141
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 153,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 169,
    "end": 170
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 174,
    "end": 175
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 191,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 203,
    "end": 204
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 207,
    "end": 208
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 212,
    "end": 213
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 230,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 239,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 261,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 268,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 294,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 305,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 327,
    "end": 328
  }
]
```
