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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
              },
              "start": 15,
              "end": 23
            },
            "accessibility": null,
            "static": false,
            "start": 14,
            "end": 24
          }
        ],
        "start": 12,
        "end": 26
      },
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 38
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "typeArguments": null,
          "start": 47,
          "end": 48
        }
      ],
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 52
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 54,
                "end": 60
              },
              "start": 52,
              "end": 60
            },
            "accessibility": null,
            "static": false,
            "start": 51,
            "end": 61
          }
        ],
        "start": 49,
        "end": 63
      },
      "declare": false,
      "start": 27,
      "end": 63
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 75
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 85
          },
          "typeArguments": null,
          "start": 84,
          "end": 85
        }
      ],
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 89
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 91,
                "end": 97
              },
              "start": 89,
              "end": 97
            },
            "accessibility": null,
            "static": false,
            "start": 88,
            "end": 98
          }
        ],
        "start": 86,
        "end": 100
      },
      "declare": false,
      "start": 64,
      "end": 100
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 112
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
              "start": 113,
              "end": 114
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 113,
            "end": 114
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 127
              },
              "typeArguments": null,
              "start": 126,
              "end": 127
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 116,
            "end": 127
          }
        ],
        "start": 112,
        "end": 128
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
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
                  "start": 138,
                  "end": 139
                },
                "typeArguments": null,
                "start": 138,
                "end": 139
              },
              "start": 136,
              "end": 139
            },
            "accessibility": null,
            "static": false,
            "start": 135,
            "end": 140
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 146
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 149
                },
                "typeArguments": null,
                "start": 148,
                "end": 149
              },
              "start": 146,
              "end": 149
            },
            "accessibility": null,
            "static": false,
            "start": 145,
            "end": 150
          }
        ],
        "start": 129,
        "end": 152
      },
      "declare": false,
      "start": 101,
      "end": 152
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
            "name": "v1",
            "optional": false,
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 170
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 174,
                              "end": 175
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 177,
                                "end": 183
                              },
                              "start": 175,
                              "end": 183
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 174,
                            "end": 184
                          }
                        ],
                        "start": 172,
                        "end": 186
                      },
                      "start": 170,
                      "end": 186
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 169,
                    "end": 186
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 191,
                      "end": 192
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 196,
                              "end": 197
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 199,
                                "end": 205
                              },
                              "start": 197,
                              "end": 205
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 196,
                            "end": 206
                          },
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
                              "start": 207,
                              "end": 208
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 210,
                                "end": 216
                              },
                              "start": 208,
                              "end": 216
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 207,
                            "end": 217
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 218,
                              "end": 219
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 221,
                                "end": 227
                              },
                              "start": 219,
                              "end": 227
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 218,
                            "end": 227
                          }
                        ],
                        "start": 194,
                        "end": 229
                      },
                      "start": 192,
                      "end": 229
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 191,
                    "end": 230
                  }
                ],
                "start": 163,
                "end": 232
              },
              "start": 161,
              "end": 232
            },
            "start": 159,
            "end": 232
          },
          "init": null,
          "definite": false,
          "start": 159,
          "end": 232
        }
      ],
      "declare": false,
      "start": 155,
      "end": 233
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 251
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
                            "start": 254,
                            "end": 255
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 257,
                              "end": 263
                            },
                            "start": 255,
                            "end": 263
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 254,
                          "end": 263
                        }
                      ],
                      "start": 252,
                      "end": 265
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 267,
                        "end": 268
                      },
                      "typeArguments": null,
                      "start": 267,
                      "end": 268
                    }
                  ],
                  "start": 251,
                  "end": 269
                },
                "start": 250,
                "end": 269
              },
              "start": 248,
              "end": 269
            },
            "start": 246,
            "end": 269
          },
          "init": null,
          "definite": false,
          "start": 246,
          "end": 269
        }
      ],
      "declare": false,
      "start": 242,
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
            "name": "v4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 311
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "G",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 312,
                        "end": 313
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 314,
                              "end": 315
                            },
                            "typeArguments": null,
                            "start": 314,
                            "end": 315
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 317,
                              "end": 318
                            },
                            "typeArguments": null,
                            "start": 317,
                            "end": 318
                          }
                        ],
                        "start": 313,
                        "end": 319
                      },
                      "start": 312,
                      "end": 319
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 321,
                        "end": 322
                      },
                      "typeArguments": null,
                      "start": 321,
                      "end": 322
                    }
                  ],
                  "start": 311,
                  "end": 323
                },
                "start": 310,
                "end": 323
              },
              "start": 308,
              "end": 323
            },
            "start": 306,
            "end": 323
          },
          "init": null,
          "definite": false,
          "start": 306,
          "end": 323
        }
      ],
      "declare": false,
      "start": 302,
      "end": 324
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 338
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
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 27,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 39,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 64,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 76,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 101,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 118,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 155,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 159,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 177,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 199,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 210,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 242,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 246,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 257,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 302,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 306,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "value": ";",
    "start": 323,
    "end": 324
  }
]
```
