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
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "MsPortal",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 18
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Controls",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 27
            },
            "start": 10,
            "end": 27
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 32
          },
          "start": 10,
          "end": 32
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ItemList",
          "optional": false,
          "typeAnnotation": null,
          "start": 33,
          "end": 41
        },
        "start": 10,
        "end": 41
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
                "name": "Interface",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 75
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 76,
                      "end": 82
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 76,
                    "end": 82
                  }
                ],
                "start": 75,
                "end": 83
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
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 159,
                      "end": 166
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ViewModel",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 168,
                          "end": 177
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TValue",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 178,
                                "end": 184
                              },
                              "typeArguments": null,
                              "start": 178,
                              "end": 184
                            }
                          ],
                          "start": 177,
                          "end": 185
                        },
                        "start": 168,
                        "end": 185
                      },
                      "start": 166,
                      "end": 185
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 159,
                    "end": 186
                  }
                ],
                "start": 84,
                "end": 192
              },
              "declare": false,
              "start": 56,
              "end": 192
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 49,
            "end": 192
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ItemValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 224
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
                      "start": 225,
                      "end": 226
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 225,
                    "end": 226
                  }
                ],
                "start": 224,
                "end": 227
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
                      "start": 238,
                      "end": 249
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
                                "start": 257,
                                "end": 258
                              },
                              "typeArguments": null,
                              "start": 257,
                              "end": 258
                            },
                            "start": 255,
                            "end": 258
                          },
                          "start": 250,
                          "end": 258
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 260,
                        "end": 271
                      },
                      "expression": false,
                      "start": 249,
                      "end": 271
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 238,
                    "end": 271
                  }
                ],
                "start": 228,
                "end": 277
              },
              "abstract": false,
              "declare": false,
              "start": 209,
              "end": 277
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 202,
            "end": 277
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ViewModel",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 310
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 311,
                      "end": 317
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 311,
                    "end": 317
                  }
                ],
                "start": 310,
                "end": 318
              },
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "ItemValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 327,
                "end": 336
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 337,
                      "end": 343
                    },
                    "typeArguments": null,
                    "start": 337,
                    "end": 343
                  }
                ],
                "start": 336,
                "end": 344
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 345,
                "end": 352
              },
              "abstract": false,
              "declare": false,
              "start": 295,
              "end": 352
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 288,
            "end": 352
          }
        ],
        "start": 42,
        "end": 354
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 354
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 629
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
    "value": "MsPortal",
    "start": 10,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "Controls",
    "start": 19,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 28,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "ItemList",
    "start": 33,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 49,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 56,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "Interface",
    "start": 66,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 159,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "ViewModel",
    "start": 168,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 178,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 202,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 209,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "ItemValue",
    "start": 215,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 238,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 250,
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
    "value": "T",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 288,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 295,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "ViewModel",
    "start": 301,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 311,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 319,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "ItemValue",
    "start": 327,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 337,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 353,
    "end": 354
  }
]
```
