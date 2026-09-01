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
            "name": "Option",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Option",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "importKind": "value",
          "start": 9,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./Option",
        "raw": "'./Option'",
        "start": 23,
        "end": 33
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Compactable",
          "optional": false,
          "typeAnnotation": null,
          "start": 48,
          "end": 59
        },
        "typeParameters": null,
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
                "name": "option",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 72
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 74,
                    "end": 80
                  },
                  "typeArguments": null,
                  "start": 74,
                  "end": 80
                },
                "start": 72,
                "end": 80
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
              "start": 66,
              "end": 81
            }
          ],
          "start": 60,
          "end": 83
        },
        "abstract": false,
        "declare": false,
        "start": 42,
        "end": 83
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 35,
      "end": 83
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 83
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
    "value": "Option",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 18,
    "end": 22
  },
  {
    "type": "String",
    "value": "'./Option'",
    "start": 23,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 35,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 42,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "Compactable",
    "start": 48,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "option",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Option",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 19
        },
        "typeParameters": null,
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
                "name": "someProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 38
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 40,
                  "end": 46
                },
                "start": 38,
                "end": 46
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
              "start": 26,
              "end": 47
            }
          ],
          "start": 20,
          "end": 49
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 49
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 49
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 49
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
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 13,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "someProperty",
    "start": 26,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
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
            "name": "Option",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Option",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "importKind": "value",
          "start": 9,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "troublesome-lib/lib/Option",
        "raw": "\"troublesome-lib/lib/Option\"",
        "start": 23,
        "end": 51
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 52
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SharedOption",
          "optional": false,
          "typeAnnotation": null,
          "start": 66,
          "end": 78
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Option",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 93
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 94,
          "end": 97
        },
        "abstract": false,
        "declare": false,
        "start": 60,
        "end": 97
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 53,
      "end": 97
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeSharedOption",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SharedOption",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 135,
                        "end": 147
                      },
                      "typeArguments": null,
                      "start": 135,
                      "end": 147
                    },
                    "start": 132,
                    "end": 147
                  },
                  "start": 129,
                  "end": 147
                },
                "start": 127,
                "end": 147
              },
              "start": 111,
              "end": 147
            },
            "init": null,
            "definite": false,
            "start": 111,
            "end": 147
          }
        ],
        "declare": false,
        "start": 105,
        "end": 148
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 98,
      "end": 148
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 148
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
    "value": "Option",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 18,
    "end": 22
  },
  {
    "type": "String",
    "value": "\"troublesome-lib/lib/Option\"",
    "start": 23,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 53,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 60,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "SharedOption",
    "start": 66,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 79,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 98,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 105,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "makeSharedOption",
    "start": 111,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 132,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "SharedOption",
    "start": 135,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
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
            "name": "Compactable",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Compactable",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "importKind": "value",
          "start": 9,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "troublesome-lib/lib/Compactable",
        "raw": "\"troublesome-lib/lib/Compactable\"",
        "start": 28,
        "end": 61
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 62
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 147
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
    "value": "Compactable",
    "start": 9,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 23,
    "end": 27
  },
  {
    "type": "String",
    "value": "\"troublesome-lib/lib/Compactable\"",
    "start": 28,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
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
            "name": "Option",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Option",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "importKind": "value",
          "start": 9,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./Option",
        "raw": "'./Option'",
        "start": 23,
        "end": 33
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Compactable",
          "optional": false,
          "typeAnnotation": null,
          "start": 48,
          "end": 59
        },
        "typeParameters": null,
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
                "name": "option",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 72
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 74,
                    "end": 80
                  },
                  "typeArguments": null,
                  "start": 74,
                  "end": 80
                },
                "start": 72,
                "end": 80
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
              "start": 66,
              "end": 81
            }
          ],
          "start": 60,
          "end": 83
        },
        "abstract": false,
        "declare": false,
        "start": 42,
        "end": 83
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 35,
      "end": 83
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 83
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
    "value": "Option",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 18,
    "end": 22
  },
  {
    "type": "String",
    "value": "'./Option'",
    "start": 23,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 35,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 42,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "Compactable",
    "start": 48,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "option",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Option",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 19
        },
        "typeParameters": null,
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
                "name": "someProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 38
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 40,
                  "end": 46
                },
                "start": 38,
                "end": 46
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
              "start": 26,
              "end": 47
            }
          ],
          "start": 20,
          "end": 49
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 49
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 49
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 49
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
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "Option",
    "start": 13,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "someProperty",
    "start": 26,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "anotherLib",
        "raw": "\"anotherLib\"",
        "start": 19,
        "end": 31
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "makeSharedOption",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 158
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "makeSharedOption",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 158
          },
          "importKind": "value",
          "start": 142,
          "end": 158
        }
      ],
      "source": {
        "type": "Literal",
        "value": "@shared/lib/app",
        "raw": "\"@shared/lib/app\"",
        "start": 166,
        "end": 183
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 133,
      "end": 184
    }
  ],
  "sourceType": "module",
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
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 14,
    "end": 18
  },
  {
    "type": "String",
    "value": "\"anotherLib\"",
    "start": 19,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "makeSharedOption",
    "start": 142,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 161,
    "end": 165
  },
  {
    "type": "String",
    "value": "\"@shared/lib/app\"",
    "start": 166,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  }
]
```
