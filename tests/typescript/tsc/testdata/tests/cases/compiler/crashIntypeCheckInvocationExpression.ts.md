__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nake",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 8
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 8
        }
      ],
      "declare": false,
      "start": 0,
      "end": 9
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doCompile",
        "optional": false,
        "typeAnnotation": null,
        "start": 19,
        "end": 28
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
              "name": "P0",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 31
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 29,
            "end": 31
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P1",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 35
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 33,
            "end": 35
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P2",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 39
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 37,
            "end": 39
          }
        ],
        "start": 28,
        "end": 40
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fileset",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P0",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 52
              },
              "typeArguments": null,
              "start": 50,
              "end": 52
            },
            "start": 48,
            "end": 52
          },
          "start": 41,
          "end": 52
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "moduleType",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P1",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 68
              },
              "typeArguments": null,
              "start": 66,
              "end": 68
            },
            "start": 64,
            "end": 68
          },
          "start": 54,
          "end": 68
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 93
            },
            "start": 77,
            "end": 94
          }
        ],
        "start": 70,
        "end": 96
      },
      "expression": false,
      "start": 10,
      "end": 96
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "compileServer",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 121
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "task",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 128
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 129,
                    "end": 135
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 137,
                    "end": 143
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 145,
                    "end": 148
                  }
                ],
                "start": 128,
                "end": 149
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P0",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 151,
                          "end": 153
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 151,
                        "end": 153
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 155,
                          "end": 157
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 155,
                        "end": 157
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 159,
                          "end": 161
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 159,
                        "end": 161
                      }
                    ],
                    "start": 150,
                    "end": 162
                  },
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "folder",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 179,
                              "end": 185
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "path",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 188,
                                  "end": 192
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "join",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 193,
                                  "end": 197
                                },
                                "optional": false,
                                "computed": false,
                                "start": 188,
                                "end": 197
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 188,
                              "end": 199
                            },
                            "definite": false,
                            "start": 179,
                            "end": 199
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileset",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 209,
                              "end": 216
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "nake",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 219,
                                  "end": 223
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fileSetSync",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 224,
                                  "end": 235
                                },
                                "optional": false,
                                "computed": false,
                                "start": 219,
                                "end": 235
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSNumberKeyword",
                                    "start": 236,
                                    "end": 242
                                  },
                                  {
                                    "type": "TSNumberKeyword",
                                    "start": 244,
                                    "end": 250
                                  },
                                  {
                                    "type": "TSAnyKeyword",
                                    "start": 252,
                                    "end": 255
                                  }
                                ],
                                "start": 235,
                                "end": 256
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "folder",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 257,
                                  "end": 263
                                }
                              ],
                              "optional": false,
                              "start": 219,
                              "end": 264
                            },
                            "definite": false,
                            "start": 209,
                            "end": 264
                          }
                        ],
                        "declare": false,
                        "start": 175,
                        "end": 264
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "doCompile",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 274,
                            "end": 283
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 284,
                                "end": 290
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 292,
                                "end": 298
                              },
                              {
                                "type": "TSAnyKeyword",
                                "start": 300,
                                "end": 303
                              }
                            ],
                            "start": 283,
                            "end": 304
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileset",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 305,
                              "end": 312
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "moduleType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 314,
                              "end": 324
                            }
                          ],
                          "optional": false,
                          "start": 274,
                          "end": 325
                        },
                        "start": 267,
                        "end": 326
                      }
                    ],
                    "start": 168,
                    "end": 328
                  },
                  "id": null,
                  "generator": false,
                  "start": 150,
                  "end": 328
                }
              ],
              "optional": false,
              "start": 124,
              "end": 329
            },
            "definite": false,
            "start": 108,
            "end": 329
          }
        ],
        "declare": false,
        "start": 104,
        "end": 330
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 97,
      "end": 330
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 330
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "nake",
    "start": 4,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "doCompile",
    "start": 19,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 29,
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
    "value": "P1",
    "start": 33,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 37,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "fileset",
    "start": 41,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 50,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "moduleType",
    "start": 54,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 66,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 77,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 84,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 97,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 104,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "compileServer",
    "start": 108,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "task",
    "start": 124,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 129,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 137,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 145,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 151,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 155,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "P2",
    "start": 159,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 165,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 175,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "folder",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 188,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 193,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "fileset",
    "start": 209,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "nake",
    "start": 219,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "fileSetSync",
    "start": 224,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 236,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 244,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 252,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "folder",
    "start": 257,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 267,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "doCompile",
    "start": 274,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 284,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 292,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 300,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "fileset",
    "start": 305,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "moduleType",
    "start": 314,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  }
]
```
