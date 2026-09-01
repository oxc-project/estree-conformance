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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 36
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
                    "start": 37,
                    "end": 38
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 37,
                  "end": 38
                }
              ],
              "start": 36,
              "end": 39
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 50,
                    "end": 51
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
                        "start": 53,
                        "end": 54
                      },
                      "typeArguments": null,
                      "start": 53,
                      "end": 54
                    },
                    "start": 51,
                    "end": 54
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 50,
                  "end": 55
                }
              ],
              "start": 40,
              "end": 61
            },
            "abstract": false,
            "declare": false,
            "start": 26,
            "end": 61
          }
        ],
        "start": 20,
        "end": 63
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 63
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 84
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 101
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
                    "start": 102,
                    "end": 103
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 102,
                  "end": 103
                }
              ],
              "start": 101,
              "end": 104
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 115,
                    "end": 116
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
                        "start": 118,
                        "end": 119
                      },
                      "typeArguments": null,
                      "start": 118,
                      "end": 119
                    },
                    "start": 116,
                    "end": 119
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 115,
                  "end": 120
                }
              ],
              "start": 105,
              "end": 126
            },
            "abstract": false,
            "declare": false,
            "start": 91,
            "end": 126
          }
        ],
        "start": 85,
        "end": 128
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 65,
      "end": 128
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "m",
        "raw": "\"m\"",
        "start": 145,
        "end": 148
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 172
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
                      "start": 173,
                      "end": 174
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 173,
                    "end": 174
                  }
                ],
                "start": 172,
                "end": 175
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
                      "name": "top",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 186,
                      "end": 189
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
                          "start": 191,
                          "end": 192
                        },
                        "typeArguments": null,
                        "start": 191,
                        "end": 192
                      },
                      "start": 189,
                      "end": 192
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 186,
                    "end": 193
                  }
                ],
                "start": 176,
                "end": 199
              },
              "abstract": false,
              "declare": false,
              "start": 162,
              "end": 199
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 155,
            "end": 199
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 225,
                            "end": 226
                          },
                          "typeArguments": null,
                          "start": 218,
                          "end": 226
                        },
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 236,
                            "end": 237
                          },
                          "typeArguments": null,
                          "start": 229,
                          "end": 237
                        }
                      ],
                      "start": 218,
                      "end": 237
                    },
                    "start": 216,
                    "end": 237
                  },
                  "start": 211,
                  "end": 237
                },
                "init": null,
                "definite": false,
                "start": 211,
                "end": 237
              }
            ],
            "declare": false,
            "start": 205,
            "end": 238
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 258
            },
            "start": 244,
            "end": 259
          }
        ],
        "start": 149,
        "end": 261
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 130,
      "end": 261
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 262
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
    "value": "A",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 32,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "declare",
    "start": 65,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 73,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "type": "Keyword",
    "value": "class",
    "start": 91,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 97,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 115,
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
    "value": "T",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 130,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 138,
    "end": 144
  },
  {
    "type": "String",
    "value": "\"m\"",
    "start": 145,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 155,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 162,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 168,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "top",
    "start": 186,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 205,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 211,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 218,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 229,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 244,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 253,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "m",
        "raw": "\"m\"",
        "start": 21,
        "end": 24
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 25
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 40
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 53
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 54,
            "end": 60
          }
        ],
        "start": 53,
        "end": 61
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 62,
        "end": 64
      },
      "abstract": false,
      "declare": false,
      "start": 27,
      "end": 64
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 64
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
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 16,
    "end": 20
  },
  {
    "type": "String",
    "value": "\"m\"",
    "start": 21,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 27,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 33,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 41,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 49,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  }
]
```
