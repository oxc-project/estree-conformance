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
        "name": "a1",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 9
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "garbage",
          "raw": "\"garbage\"",
          "start": 20,
          "end": 29
        },
        "start": 12,
        "end": 30
      },
      "importKind": "value",
      "start": 0,
      "end": 31
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
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
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
                        "name": "test1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 60,
                        "end": 65
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 67,
                              "end": 69
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "connectModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 70,
                              "end": 83
                            },
                            "start": 67,
                            "end": 83
                          },
                          "typeArguments": null,
                          "start": 67,
                          "end": 83
                        },
                        "start": 65,
                        "end": 83
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 60,
                      "end": 84
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 93,
                              "end": 95
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "connectExport",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 96,
                              "end": 109
                            },
                            "start": 93,
                            "end": 109
                          },
                          "typeArguments": null,
                          "start": 93,
                          "end": 109
                        },
                        "start": 91,
                        "end": 109
                      },
                      "start": 89,
                      "end": 110
                    }
                  ],
                  "start": 54,
                  "end": 112
                },
                "start": 52,
                "end": 112
              },
              "start": 51,
              "end": 112
            },
            "init": null,
            "definite": false,
            "start": 51,
            "end": 112
          }
        ],
        "declare": true,
        "start": 39,
        "end": 113
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 32,
      "end": 113
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 113
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
    "value": "a1",
    "start": 7,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 12,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "String",
    "value": "\"garbage\"",
    "start": 20,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 32,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 39,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 47,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 60,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "connectModule",
    "start": 70,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 93,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "connectExport",
    "start": 96,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  }
]
```
