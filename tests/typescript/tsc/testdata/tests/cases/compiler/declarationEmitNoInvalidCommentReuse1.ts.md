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
            "name": "object",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 72
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 72
          },
          "importKind": "value",
          "start": 66,
          "end": 72
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./obj",
        "raw": "\"./obj\"",
        "start": 80,
        "end": 87
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 57,
      "end": 88
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
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 104
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 113
            },
            "definite": false,
            "start": 103,
            "end": 113
          }
        ],
        "declare": false,
        "start": 97,
        "end": 114
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 90,
      "end": 114
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 142
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 57,
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
    "value": "object",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 75,
    "end": 79
  },
  {
    "type": "String",
    "value": "\"./obj\"",
    "start": 80,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 90,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 97,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
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
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSImportType",
                  "source": {
                    "type": "Literal",
                    "value": "./id",
                    "raw": "\"./id\"",
                    "start": 36,
                    "end": 42
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 44,
                    "end": 46
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 53,
                              "end": 56
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSImportType",
                                "source": {
                                  "type": "Literal",
                                  "value": "./id",
                                  "raw": "\"./id\"",
                                  "start": 65,
                                  "end": 71
                                },
                                "options": null,
                                "qualifier": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Id",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 74,
                                  "end": 76
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeLiteral",
                                      "members": [],
                                      "start": 77,
                                      "end": 79
                                    }
                                  ],
                                  "start": 76,
                                  "end": 80
                                },
                                "start": 58,
                                "end": 80
                              },
                              "start": 56,
                              "end": 80
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 53,
                            "end": 81
                          }
                        ],
                        "start": 47,
                        "end": 83
                      }
                    ],
                    "start": 46,
                    "end": 84
                  },
                  "start": 29,
                  "end": 84
                },
                "start": 27,
                "end": 84
              },
              "start": 21,
              "end": 84
            },
            "init": null,
            "definite": false,
            "start": 21,
            "end": 84
          }
        ],
        "declare": true,
        "start": 7,
        "end": 85
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 85
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 86
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
    "value": "declare",
    "start": 7,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 15,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "String",
    "value": "\"./id\"",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 44,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 53,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "String",
    "value": "\"./id\"",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 74,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 79,
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
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
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
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Id",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 14
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
                "start": 15,
                "end": 16
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 15,
              "end": 16
            }
          ],
          "start": 14,
          "end": 17
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 21
          },
          "typeArguments": null,
          "start": 20,
          "end": 21
        },
        "declare": false,
        "start": 7,
        "end": 22
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 22
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 22
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
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 12,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  }
]
```
