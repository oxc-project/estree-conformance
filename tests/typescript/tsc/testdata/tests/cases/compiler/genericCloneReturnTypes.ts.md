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
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "start": 10,
              "end": 11
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 10,
            "end": 11
          }
        ],
        "start": 9,
        "end": 12
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 31
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 33,
                "end": 39
              },
              "start": 31,
              "end": 39
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 20,
            "end": 40
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 53
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
                  "start": 55,
                  "end": 56
                },
                "typeArguments": null,
                "start": 55,
                "end": 56
              },
              "start": 53,
              "end": 56
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 45,
            "end": 57
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 74
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 78,
                      "end": 84
                    },
                    "start": 76,
                    "end": 84
                  },
                  "start": 75,
                  "end": 84
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 97,
                          "end": 101
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 102,
                          "end": 106
                        },
                        "optional": false,
                        "computed": false,
                        "start": 97,
                        "end": 106
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 109,
                        "end": 110
                      },
                      "start": 97,
                      "end": 110
                    },
                    "directive": null,
                    "start": 97,
                    "end": 111
                  }
                ],
                "start": 86,
                "end": 118
              },
              "expression": false,
              "start": 74,
              "end": 118
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 63,
            "end": 118
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "clone",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 136
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 164
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
                              "start": 165,
                              "end": 166
                            },
                            "typeArguments": null,
                            "start": 165,
                            "end": 166
                          }
                        ],
                        "start": 164,
                        "end": 167
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 168,
                            "end": 172
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "size",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 173,
                            "end": 177
                          },
                          "optional": false,
                          "computed": false,
                          "start": 168,
                          "end": 177
                        }
                      ],
                      "start": 157,
                      "end": 178
                    },
                    "start": 150,
                    "end": 179
                  }
                ],
                "start": 139,
                "end": 186
              },
              "expression": false,
              "start": 136,
              "end": 186
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 124,
            "end": 186
          }
        ],
        "start": 13,
        "end": 189
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 189
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 198,
                  "end": 201
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 202,
                      "end": 208
                    }
                  ],
                  "start": 201,
                  "end": 209
                },
                "start": 198,
                "end": 209
              },
              "start": 196,
              "end": 209
            },
            "start": 195,
            "end": 209
          },
          "init": null,
          "definite": false,
          "start": 195,
          "end": 209
        }
      ],
      "declare": false,
      "start": 191,
      "end": 210
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 218
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 222
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "clone",
                "optional": false,
                "typeAnnotation": null,
                "start": 223,
                "end": 228
              },
              "optional": false,
              "computed": false,
              "start": 221,
              "end": 228
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 221,
            "end": 230
          },
          "definite": false,
          "start": 216,
          "end": 230
        }
      ],
      "declare": false,
      "start": 212,
      "end": 231
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
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 243
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 244,
                      "end": 250
                    }
                  ],
                  "start": 243,
                  "end": 251
                },
                "start": 240,
                "end": 251
              },
              "start": 238,
              "end": 251
            },
            "start": 236,
            "end": 251
          },
          "init": null,
          "definite": false,
          "start": 236,
          "end": 251
        }
      ],
      "declare": false,
      "start": 232,
      "end": 252
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 253,
          "end": 254
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 257,
          "end": 259
        },
        "start": 253,
        "end": 259
      },
      "directive": null,
      "start": 253,
      "end": 260
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 262
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b3",
          "optional": false,
          "typeAnnotation": null,
          "start": 265,
          "end": 267
        },
        "start": 261,
        "end": 267
      },
      "directive": null,
      "start": 261,
      "end": 268
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 268
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 20,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 27,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 45,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 63,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "this",
    "start": 97,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 124,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "clone",
    "start": 131,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 150,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 157,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 161,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 168,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 173,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "var",
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
    "value": "Bar",
    "start": 198,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 212,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 216,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "clone",
    "start": 223,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 232,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 236,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 240,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 244,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 257,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 265,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  }
]
```
