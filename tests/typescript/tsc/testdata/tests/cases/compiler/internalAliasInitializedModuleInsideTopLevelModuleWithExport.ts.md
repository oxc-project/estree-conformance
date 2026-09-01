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
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 43
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 67,
                          "end": 68
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 69,
                          "end": 80
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 61,
                        "end": 80
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 54,
                      "end": 80
                    }
                  ],
                  "start": 44,
                  "end": 86
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 32,
                "end": 86
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 25,
              "end": 86
            }
          ],
          "start": 19,
          "end": 88
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 88
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 88
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 104,
          "end": 105
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 109
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 111
          },
          "start": 108,
          "end": 111
        },
        "importKind": "value",
        "start": 97,
        "end": 112
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 90,
      "end": 112
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
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 127,
                      "end": 128
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 129,
                      "end": 130
                    },
                    "start": 127,
                    "end": 130
                  },
                  "typeArguments": null,
                  "start": 127,
                  "end": 130
                },
                "start": 125,
                "end": 130
              },
              "start": 124,
              "end": 130
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 138
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 139,
                  "end": 140
                },
                "optional": false,
                "computed": false,
                "start": 137,
                "end": 140
              },
              "typeArguments": null,
              "arguments": [],
              "start": 133,
              "end": 142
            },
            "definite": false,
            "start": 124,
            "end": 142
          }
        ],
        "declare": false,
        "start": 120,
        "end": 143
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 113,
      "end": 143
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 143
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
    "value": "a",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 25,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 32,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 54,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 61,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 90,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 97,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 113,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 120,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 133,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  }
]
```
