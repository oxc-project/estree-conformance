__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
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
              "start": 14,
              "end": 15
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 14,
            "end": 15
          }
        ],
        "start": 13,
        "end": 16
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 25
            },
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
                  "start": 27,
                  "end": 28
                },
                "typeArguments": null,
                "start": 27,
                "end": 28
              },
              "start": 25,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 23,
            "end": 28
          }
        ],
        "start": 17,
        "end": 30
      },
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Recursive",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 46
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
              "start": 47,
              "end": 48
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 47,
            "end": 48
          }
        ],
        "start": 46,
        "end": 49
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
            },
            "typeArguments": null,
            "start": 58,
            "end": 59
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Box",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 69
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Recursive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 70,
                    "end": 79
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
                          "start": 80,
                          "end": 81
                        },
                        "typeArguments": null,
                        "start": 80,
                        "end": 81
                      }
                    ],
                    "start": 79,
                    "end": 82
                  },
                  "start": 70,
                  "end": 82
                }
              ],
              "start": 69,
              "end": 83
            },
            "start": 66,
            "end": 83
          }
        ],
        "start": 56,
        "end": 83
      },
      "declare": false,
      "start": 32,
      "end": 83
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferRecursive",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 104
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
              "start": 105,
              "end": 106
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 105,
            "end": 106
          }
        ],
        "start": 104,
        "end": 107
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 111
          },
          "typeArguments": null,
          "start": 110,
          "end": 111
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Recursive",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 129
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 136,
                    "end": 137
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 136,
                  "end": 137
                },
                "start": 130,
                "end": 137
              }
            ],
            "start": 129,
            "end": 138
          },
          "start": 120,
          "end": 138
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 141,
            "end": 142
          },
          "typeArguments": null,
          "start": 141,
          "end": 142
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "never!",
            "raw": "\"never!\"",
            "start": 145,
            "end": 153
          },
          "start": 145,
          "end": 153
        },
        "start": 110,
        "end": 153
      },
      "declare": false,
      "start": 85,
      "end": 153
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t1",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 194
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box",
          "optional": false,
          "typeAnnotation": null,
          "start": 197,
          "end": 200
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 201,
                  "end": 207
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 213
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 214,
                            "end": 220
                          },
                          {
                            "type": "TSBooleanKeyword",
                            "start": 223,
                            "end": 230
                          }
                        ],
                        "start": 214,
                        "end": 230
                      }
                    ],
                    "start": 213,
                    "end": 231
                  },
                  "start": 210,
                  "end": 231
                }
              ],
              "start": 201,
              "end": 231
            }
          ],
          "start": 200,
          "end": 232
        },
        "start": 197,
        "end": 232
      },
      "declare": false,
      "start": 187,
      "end": 232
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t2",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 241
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InferRecursive",
          "optional": false,
          "typeAnnotation": null,
          "start": 244,
          "end": 258
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 261
              },
              "typeArguments": null,
              "start": 259,
              "end": 261
            }
          ],
          "start": 258,
          "end": 262
        },
        "start": 244,
        "end": 262
      },
      "declare": false,
      "start": 234,
      "end": 262
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t3",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 270
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InferRecursive",
          "optional": false,
          "typeAnnotation": null,
          "start": 273,
          "end": 287
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Box",
                "optional": false,
                "typeAnnotation": null,
                "start": 288,
                "end": 291
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 292,
                        "end": 298
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 301,
                          "end": 304
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 305,
                                  "end": 311
                                },
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 314,
                                  "end": 321
                                }
                              ],
                              "start": 305,
                              "end": 321
                            }
                          ],
                          "start": 304,
                          "end": 322
                        },
                        "start": 301,
                        "end": 322
                      }
                    ],
                    "start": 292,
                    "end": 322
                  }
                ],
                "start": 291,
                "end": 323
              },
              "start": 288,
              "end": 323
            }
          ],
          "start": 287,
          "end": 324
        },
        "start": 273,
        "end": 324
      },
      "declare": false,
      "start": 263,
      "end": 324
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 414
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "__",
    "start": 23,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 32,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Recursive",
    "start": 37,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 66,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "Recursive",
    "start": 70,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 85,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "InferRecursive",
    "start": 90,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 112,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "Recursive",
    "start": 120,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 130,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "String",
    "value": "\"never!\"",
    "start": 145,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 187,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 197,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 210,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 223,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 234,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 239,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "InferRecursive",
    "start": 244,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 259,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 263,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 268,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "InferRecursive",
    "start": 273,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 288,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 292,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 301,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 305,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 314,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 323,
    "end": 324
  }
]
```
