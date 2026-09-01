__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 18
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 20
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 22,
            "end": 23
          }
        ],
        "start": 18,
        "end": 24
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 41
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iterable",
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
                            "name": "Iterable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 52,
                            "end": 60
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTupleType",
                                "elementTypes": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "K",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 62,
                                      "end": 63
                                    },
                                    "typeArguments": null,
                                    "start": 62,
                                    "end": 63
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 65,
                                      "end": 66
                                    },
                                    "typeArguments": null,
                                    "start": 65,
                                    "end": 66
                                  }
                                ],
                                "start": 61,
                                "end": 67
                              }
                            ],
                            "start": 60,
                            "end": 68
                          },
                          "start": 52,
                          "end": 68
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 71,
                          "end": 80
                        }
                      ],
                      "start": 52,
                      "end": 80
                    },
                    "start": 50,
                    "end": 80
                  },
                  "start": 42,
                  "end": 80
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 41,
              "end": 82
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 30,
            "end": 82
          }
        ],
        "start": 26,
        "end": 84
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 84
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "DMap",
          "optional": false,
          "typeAnnotation": null,
          "start": 89,
          "end": 93
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "1",
                    "raw": "\"1\"",
                    "start": 96,
                    "end": 99
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 101,
                    "end": 102
                  }
                ],
                "start": 95,
                "end": 103
              }
            ],
            "start": 94,
            "end": 104
          }
        ],
        "start": 85,
        "end": 105
      },
      "directive": null,
      "start": 85,
      "end": 106
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
            "name": "i1",
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
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 118,
                      "end": 126
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
                                "start": 129,
                                "end": 130
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": true,
                                    "raw": "true",
                                    "start": 132,
                                    "end": 136
                                  },
                                  "start": 132,
                                  "end": 136
                                },
                                "start": 130,
                                "end": 136
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 129,
                              "end": 136
                            }
                          ],
                          "start": 127,
                          "end": 138
                        }
                      ],
                      "start": 126,
                      "end": 139
                    },
                    "start": 118,
                    "end": 139
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 142,
                    "end": 151
                  }
                ],
                "start": 118,
                "end": 151
              },
              "start": 116,
              "end": 151
            },
            "start": 114,
            "end": 151
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
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
                      "start": 157,
                      "end": 158
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 160,
                      "end": 164
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 157,
                    "end": 164
                  }
                ],
                "start": 155,
                "end": 166
              }
            ],
            "start": 154,
            "end": 167
          },
          "definite": false,
          "start": 114,
          "end": 167
        }
      ],
      "declare": false,
      "start": 108,
      "end": 168
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
            "name": "i2",
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
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 179,
                      "end": 187
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
                                "start": 190,
                                "end": 191
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": true,
                                    "raw": "true",
                                    "start": 193,
                                    "end": 197
                                  },
                                  "start": 193,
                                  "end": 197
                                },
                                "start": 191,
                                "end": 197
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 190,
                              "end": 197
                            }
                          ],
                          "start": 188,
                          "end": 199
                        }
                      ],
                      "start": 187,
                      "end": 200
                    },
                    "start": 179,
                    "end": 200
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 203,
                      "end": 211
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
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 214,
                                "end": 215
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": false,
                                    "raw": "false",
                                    "start": 217,
                                    "end": 222
                                  },
                                  "start": 217,
                                  "end": 222
                                },
                                "start": 215,
                                "end": 222
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 214,
                              "end": 222
                            }
                          ],
                          "start": 212,
                          "end": 224
                        }
                      ],
                      "start": 211,
                      "end": 225
                    },
                    "start": 203,
                    "end": 225
                  }
                ],
                "start": 179,
                "end": 225
              },
              "start": 177,
              "end": 225
            },
            "start": 175,
            "end": 225
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 231,
                      "end": 232
                    },
                    "value": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 234,
                      "end": 239
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 231,
                    "end": 239
                  }
                ],
                "start": 229,
                "end": 241
              }
            ],
            "start": 228,
            "end": 242
          },
          "definite": false,
          "start": 175,
          "end": 242
        }
      ],
      "declare": false,
      "start": 169,
      "end": 243
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
            "name": "i3",
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
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 254,
                      "end": 262
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 263,
                          "end": 269
                        }
                      ],
                      "start": 262,
                      "end": 270
                    },
                    "start": 254,
                    "end": 270
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 273,
                        "end": 274
                      },
                      "start": 273,
                      "end": 274
                    },
                    "start": 273,
                    "end": 276
                  }
                ],
                "start": 254,
                "end": 276
              },
              "start": 252,
              "end": 276
            },
            "start": 250,
            "end": 276
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 280,
                "end": 281
              }
            ],
            "start": 279,
            "end": 282
          },
          "definite": false,
          "start": 250,
          "end": 282
        }
      ],
      "declare": false,
      "start": 244,
      "end": 283
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 283
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "DMap",
    "start": 14,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 30,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 42,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 52,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 71,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 85,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "DMap",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 95,
    "end": 96
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 96,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 108,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 114,
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
    "value": "Iterable",
    "start": 118,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 132,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 142,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
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
    "type": "Boolean",
    "value": "true",
    "start": 160,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 169,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 175,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 179,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 193,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 203,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 217,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 234,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 244,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 250,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 254,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 271,
    "end": 272
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 279,
    "end": 280
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  }
]
```
