__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
                "name": "elaborate",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 26
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 33
              },
              "start": 17,
              "end": 33
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "mod",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 37
            },
            "start": 17,
            "end": 37
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 42
          },
          "start": 17,
          "end": 42
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
                  "name": "ReferredTo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 72
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
                        "name": "doSomething",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 83,
                        "end": 94
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 98,
                            "end": 102
                          },
                          "start": 96,
                          "end": 102
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 103,
                          "end": 114
                        },
                        "expression": false,
                        "start": 94,
                        "end": 114
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 83,
                      "end": 114
                    }
                  ],
                  "start": 73,
                  "end": 120
                },
                "abstract": false,
                "declare": false,
                "start": 56,
                "end": 120
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 49,
              "end": 120
            }
          ],
          "start": 43,
          "end": 122
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 122
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 122
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 123
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "elaborate",
    "start": 17,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 34,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 38,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 49,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "ReferredTo",
    "start": 62,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 83,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 98,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RT_ALIAS",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 15
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "file1",
          "raw": "\"file1\"",
          "start": 26,
          "end": 33
        },
        "start": 18,
        "end": 34
      },
      "importKind": "value",
      "start": 0,
      "end": 35
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReferredTo",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 53
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "TSQualifiedName",
            "left": {
              "type": "TSQualifiedName",
              "left": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RT_ALIAS",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 64
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "elaborate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 74
                },
                "start": 56,
                "end": 74
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 81
              },
              "start": 56,
              "end": 81
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "mod",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 85
            },
            "start": 56,
            "end": 85
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 90
          },
          "start": 56,
          "end": 90
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReferredTo",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 101
        },
        "start": 56,
        "end": 101
      },
      "importKind": "value",
      "start": 36,
      "end": 102
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImportingModule",
          "optional": false,
          "typeAnnotation": null,
          "start": 121,
          "end": 136
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
                "name": "UsesReferredType",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 165
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
                      "start": 176,
                      "end": 187
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
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "referred",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ReferredTo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 206,
                                  "end": 216
                                },
                                "typeArguments": null,
                                "start": 206,
                                "end": 216
                              },
                              "start": 204,
                              "end": 216
                            },
                            "start": 196,
                            "end": 216
                          },
                          "readonly": false,
                          "static": false,
                          "start": 188,
                          "end": 216
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 218,
                        "end": 221
                      },
                      "expression": false,
                      "start": 187,
                      "end": 221
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 176,
                    "end": 221
                  }
                ],
                "start": 166,
                "end": 227
              },
              "abstract": false,
              "declare": false,
              "start": 143,
              "end": 227
            }
          ],
          "start": 137,
          "end": 229
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 111,
        "end": 229
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 104,
      "end": 229
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 229
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
    "type": "Identifier",
    "value": "RT_ALIAS",
    "start": 7,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "String",
    "value": "\"file1\"",
    "start": 26,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 36,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "ReferredTo",
    "start": 43,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "RT_ALIAS",
    "start": 56,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "elaborate",
    "start": 65,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 82,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "ReferredTo",
    "start": 91,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 104,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 111,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "ImportingModule",
    "start": 121,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 143,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "UsesReferredType",
    "start": 149,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 176,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 188,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "referred",
    "start": 196,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "ReferredTo",
    "start": 206,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  }
]
```
