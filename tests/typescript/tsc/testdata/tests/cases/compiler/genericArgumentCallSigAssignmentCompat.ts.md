__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Underscore",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 52
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
                      "start": 53,
                      "end": 54
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 53,
                    "end": 54
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 56,
                      "end": 57
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 56,
                    "end": 57
                  }
                ],
                "start": 52,
                "end": 58
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
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
                              "start": 77,
                              "end": 78
                            },
                            "typeArguments": null,
                            "start": 77,
                            "end": 78
                          },
                          "start": 75,
                          "end": 78
                        },
                        "start": 70,
                        "end": 78
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 87,
                            "end": 90
                          },
                          "start": 85,
                          "end": 90
                        },
                        "start": 80,
                        "end": 90
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "list",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 98,
                            "end": 101
                          },
                          "start": 96,
                          "end": 101
                        },
                        "start": 92,
                        "end": 101
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 104,
                          "end": 105
                        },
                        "typeArguments": null,
                        "start": 104,
                        "end": 105
                      },
                      "start": 102,
                      "end": 105
                    },
                    "start": 69,
                    "end": 106
                  }
                ],
                "start": 59,
                "end": 112
              },
              "declare": false,
              "start": 34,
              "end": 112
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 27,
            "end": 112
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Static",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 142
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "all",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 153,
                      "end": 156
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 157,
                            "end": 158
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 157,
                          "end": 158
                        }
                      ],
                      "start": 156,
                      "end": 159
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "list",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 166,
                                "end": 167
                              },
                              "typeArguments": null,
                              "start": 166,
                              "end": 167
                            },
                            "start": 166,
                            "end": 169
                          },
                          "start": 164,
                          "end": 169
                        },
                        "start": 160,
                        "end": 169
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iterator",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Iterator",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 182,
                              "end": 190
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 191,
                                    "end": 192
                                  },
                                  "typeArguments": null,
                                  "start": 191,
                                  "end": 192
                                },
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 194,
                                  "end": 201
                                }
                              ],
                              "start": 190,
                              "end": 202
                            },
                            "start": 182,
                            "end": 202
                          },
                          "start": 180,
                          "end": 202
                        },
                        "start": 171,
                        "end": 202
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 214,
                            "end": 217
                          },
                          "start": 212,
                          "end": 217
                        },
                        "start": 204,
                        "end": 217
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 220,
                        "end": 227
                      },
                      "start": 218,
                      "end": 227
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 153,
                    "end": 228
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "identity",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 237,
                      "end": 245
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                      "start": 245,
                      "end": 248
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
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
                              "start": 256,
                              "end": 257
                            },
                            "typeArguments": null,
                            "start": 256,
                            "end": 257
                          },
                          "start": 254,
                          "end": 257
                        },
                        "start": 249,
                        "end": 257
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 260,
                          "end": 261
                        },
                        "typeArguments": null,
                        "start": 260,
                        "end": 261
                      },
                      "start": 258,
                      "end": 261
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 237,
                    "end": 262
                  }
                ],
                "start": 143,
                "end": 268
              },
              "declare": false,
              "start": 126,
              "end": 268
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 119,
            "end": 268
          }
        ],
        "start": 21,
        "end": 270
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 270
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Underscore",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 288,
                    "end": 298
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Static",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 299,
                    "end": 305
                  },
                  "start": 288,
                  "end": 305
                },
                "typeArguments": null,
                "start": 288,
                "end": 305
              },
              "start": 286,
              "end": 305
            },
            "start": 285,
            "end": 305
          },
          "init": null,
          "definite": false,
          "start": 285,
          "end": 305
        }
      ],
      "declare": true,
      "start": 273,
      "end": 306
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": null,
            "start": 574,
            "end": 575
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "all",
            "optional": false,
            "typeAnnotation": null,
            "start": 576,
            "end": 579
          },
          "optional": false,
          "computed": false,
          "start": 574,
          "end": 579
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 581,
                "end": 585
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 587,
                "end": 588
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 590,
                "end": 594
              },
              {
                "type": "Literal",
                "value": "yes",
                "raw": "'yes'",
                "start": 596,
                "end": 601
              }
            ],
            "start": 580,
            "end": 602
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 604,
              "end": 605
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "identity",
              "optional": false,
              "typeAnnotation": null,
              "start": 606,
              "end": 614
            },
            "optional": false,
            "computed": false,
            "start": 604,
            "end": 614
          }
        ],
        "optional": false,
        "start": 574,
        "end": 615
      },
      "directive": null,
      "start": 574,
      "end": 616
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": null,
            "start": 670,
            "end": 671
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "all",
            "optional": false,
            "typeAnnotation": null,
            "start": 672,
            "end": 675
          },
          "optional": false,
          "computed": false,
          "start": 670,
          "end": 675
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 677,
                "end": 681
              }
            ],
            "start": 676,
            "end": 682
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 685
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "identity",
              "optional": false,
              "typeAnnotation": null,
              "start": 686,
              "end": 694
            },
            "optional": false,
            "computed": false,
            "start": 684,
            "end": 694
          }
        ],
        "optional": false,
        "start": 670,
        "end": 695
      },
      "directive": null,
      "start": 670,
      "end": 696
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 696
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Underscore",
    "start": 10,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 27,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 34,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 44,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 70,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 92,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 98,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 119,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 126,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Static",
    "start": 136,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 153,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 160,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 171,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 182,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 194,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 204,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 214,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 220,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 237,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "value",
    "start": 249,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 273,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 281,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "Underscore",
    "start": 288,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "Static",
    "start": 299,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 576,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 580,
    "end": 581
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 581,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 585,
    "end": 586
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 588,
    "end": 589
  },
  {
    "type": "Null",
    "value": "null",
    "start": 590,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 594,
    "end": 595
  },
  {
    "type": "String",
    "value": "'yes'",
    "start": 596,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 606,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 672,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 676,
    "end": 677
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 677,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 686,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696
  }
]
```
