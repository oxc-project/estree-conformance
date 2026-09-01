__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "OnRtls",
          "optional": false,
          "typeAnnotation": null,
          "start": 10,
          "end": 16
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mappa",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 22
        },
        "start": 10,
        "end": 22
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "TipoCamera",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 57
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Camera2D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 60,
                      "end": 68
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 71,
                      "end": 72
                    },
                    "computed": false,
                    "start": 60,
                    "end": 72
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Camera3D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 74,
                      "end": 82
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 85,
                      "end": 86
                    },
                    "computed": false,
                    "start": 74,
                    "end": 86
                  }
                ],
                "start": 58,
                "end": 88
              },
              "const": true,
              "declare": false,
              "start": 36,
              "end": 88
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 29,
            "end": 88
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "MappaViewModel",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 120
              },
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
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 131,
                      "end": 142
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
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "canvas",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 158,
                                "end": 161
                              },
                              "start": 156,
                              "end": 161
                            },
                            "start": 150,
                            "end": 161
                          },
                          "readonly": false,
                          "static": false,
                          "start": 143,
                          "end": 161
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "config",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 178,
                                "end": 181
                              },
                              "start": 176,
                              "end": 181
                            },
                            "start": 170,
                            "end": 181
                          },
                          "readonly": false,
                          "static": false,
                          "start": 163,
                          "end": 181
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tipo",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TipoCamera",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 196,
                                  "end": 206
                                },
                                "typeArguments": null,
                                "start": 196,
                                "end": 206
                              },
                              "start": 194,
                              "end": 206
                            },
                            "start": 190,
                            "end": 206
                          },
                          "readonly": false,
                          "static": false,
                          "start": 183,
                          "end": 206
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 208,
                        "end": 210
                      },
                      "expression": false,
                      "start": 142,
                      "end": 210
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 131,
                    "end": 210
                  }
                ],
                "start": 121,
                "end": 216
              },
              "abstract": false,
              "declare": false,
              "start": 100,
              "end": 216
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 93,
            "end": 216
          }
        ],
        "start": 23,
        "end": 218
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 218
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 219
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
    "value": "OnRtls",
    "start": 10,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "Mappa",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 29,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 36,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 42,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "TipoCamera",
    "start": 47,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Camera2D",
    "start": 60,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 69,
    "end": 70
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Camera3D",
    "start": 74,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 93,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 100,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "MappaViewModel",
    "start": 106,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 131,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 143,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "canvas",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 163,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 178,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 183,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "tipo",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "TipoCamera",
    "start": 196,
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
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "OnRtls",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 24
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Mappa",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 30
          },
          "start": 18,
          "end": 30
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Server",
          "optional": false,
          "typeAnnotation": null,
          "start": 31,
          "end": 37
        },
        "start": 18,
        "end": 37
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "SomeFlag",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 63
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 66,
                    "end": 67
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 70,
                    "end": 71
                  },
                  "computed": false,
                  "start": 66,
                  "end": 71
                }
              ],
              "start": 64,
              "end": 73
            },
            "const": true,
            "declare": false,
            "start": 44,
            "end": 73
          }
        ],
        "start": 38,
        "end": 75
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 75
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 76
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
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "OnRtls",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "Mappa",
    "start": 25,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Server",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 44,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 50,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "SomeFlag",
    "start": 55,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "start": 74,
    "end": 75
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "OnRtls",
            "optional": false,
            "typeAnnotation": null,
            "start": 10,
            "end": 16
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Carrello",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 25
          },
          "start": 10,
          "end": 25
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Home",
          "optional": false,
          "typeAnnotation": null,
          "start": 26,
          "end": 30
        },
        "start": 10,
        "end": 30
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mappa",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 49
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "OnRtls",
                "optional": false,
                "typeAnnotation": null,
                "start": 52,
                "end": 58
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mappa",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 64
              },
              "start": 52,
              "end": 64
            },
            "importKind": "value",
            "start": 37,
            "end": 65
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "SensmapViewModel",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 99
              },
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
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 110,
                      "end": 121
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
                            "type": "VariableDeclaration",
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 142,
                                  "end": 143
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "mappa",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 150,
                                      "end": 155
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "MappaViewModel",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 156,
                                      "end": 170
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 150,
                                    "end": 170
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 171,
                                      "end": 175
                                    },
                                    {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 177,
                                      "end": 181
                                    },
                                    {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "mappa",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 183,
                                          "end": 188
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "TipoCamera",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 189,
                                          "end": 199
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 183,
                                        "end": 199
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Camera3D",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 200,
                                        "end": 208
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 183,
                                      "end": 208
                                    }
                                  ],
                                  "start": 146,
                                  "end": 209
                                },
                                "definite": false,
                                "start": 142,
                                "end": 209
                              }
                            ],
                            "declare": false,
                            "start": 138,
                            "end": 210
                          }
                        ],
                        "start": 124,
                        "end": 220
                      },
                      "expression": false,
                      "start": 121,
                      "end": 220
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 110,
                    "end": 220
                  }
                ],
                "start": 100,
                "end": 226
              },
              "abstract": false,
              "declare": false,
              "start": 77,
              "end": 226
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 70,
            "end": 226
          }
        ],
        "start": 31,
        "end": 228
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 228
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 228
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
    "value": "OnRtls",
    "start": 10,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "Carrello",
    "start": 17,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Home",
    "start": 26,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 37,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "mappa",
    "start": 44,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "OnRtls",
    "start": 52,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Mappa",
    "start": 59,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 70,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 77,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "SensmapViewModel",
    "start": 83,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 110,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 138,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 146,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "mappa",
    "start": 150,
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
    "value": "MappaViewModel",
    "start": 156,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Null",
    "value": "null",
    "start": 171,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 175,
    "end": 176
  },
  {
    "type": "Null",
    "value": "null",
    "start": 177,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "mappa",
    "start": 183,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "TipoCamera",
    "start": 189,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "Camera3D",
    "start": 200,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228
  }
]
```
