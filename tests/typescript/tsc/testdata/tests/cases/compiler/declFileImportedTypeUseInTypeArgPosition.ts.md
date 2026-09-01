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
        "name": "List",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
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
              "start": 11,
              "end": 12
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 11,
            "end": 12
          }
        ],
        "start": 10,
        "end": 13
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 14,
        "end": 17
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "mod1",
        "raw": "'mod1'",
        "start": 33,
        "end": 39
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
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 55
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 56,
              "end": 63
            },
            "abstract": false,
            "declare": false,
            "start": 46,
            "end": 63
          }
        ],
        "start": 40,
        "end": 65
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 18,
      "end": 65
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "moo",
        "raw": "'moo'",
        "start": 82,
        "end": 87
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 102
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "mod1",
                "raw": "'mod1'",
                "start": 113,
                "end": 119
              },
              "start": 105,
              "end": 120
            },
            "importKind": "value",
            "start": 94,
            "end": 121
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
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "List",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 140,
                          "end": 144
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 145,
                                  "end": 146
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Foo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 147,
                                  "end": 150
                                },
                                "start": 145,
                                "end": 150
                              },
                              "typeArguments": null,
                              "start": 145,
                              "end": 150
                            }
                          ],
                          "start": 144,
                          "end": 151
                        },
                        "start": 140,
                        "end": 151
                      },
                      "start": 138,
                      "end": 151
                    },
                    "start": 137,
                    "end": 151
                  },
                  "init": null,
                  "definite": false,
                  "start": 137,
                  "end": 151
                }
              ],
              "declare": false,
              "start": 133,
              "end": 152
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 126,
            "end": 152
          }
        ],
        "start": 88,
        "end": 154
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 67,
      "end": 154
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 156
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
    "value": "List",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
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
    "value": "declare",
    "start": 18,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 26,
    "end": 32
  },
  {
    "type": "String",
    "value": "'mod1'",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 46,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 52,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 67,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 75,
    "end": 81
  },
  {
    "type": "String",
    "value": "'moo'",
    "start": 82,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 94,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 105,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "String",
    "value": "'mod1'",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 126,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 133,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 140,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 147,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  }
]
```
