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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 15
          },
          "start": 7,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./foo",
        "raw": "'./foo'",
        "start": 21,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 52
      },
      "start": 29,
      "end": 52
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 65
      },
      "start": 53,
      "end": 66
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 82
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 107,
                        "end": 110
                      },
                      "typeArguments": null,
                      "start": 100,
                      "end": 110
                    },
                    "start": 98,
                    "end": 110
                  },
                  "start": 95,
                  "end": 110
                },
                "init": null,
                "definite": false,
                "start": 95,
                "end": 110
              }
            ],
            "declare": false,
            "start": 89,
            "end": 111
          }
        ],
        "start": 83,
        "end": 113
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 68,
      "end": 113
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 114
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
    "value": "foo",
    "start": 12,
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
    "value": "'./foo'",
    "start": 21,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 29,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 36,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 39,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 49,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 62,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 68,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 89,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 100,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Root",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "typeParameters": null,
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
              "name": "default",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 108
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Root",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 110,
                  "end": 114
                },
                "typeArguments": null,
                "start": 110,
                "end": 114
              },
              "start": 108,
              "end": 114
            },
            "accessibility": null,
            "static": false,
            "start": 101,
            "end": 115
          }
        ],
        "start": 15,
        "end": 117
      },
      "declare": false,
      "start": 0,
      "end": 117
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
            "name": "root",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Root",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 139,
                  "end": 143
                },
                "typeArguments": null,
                "start": 139,
                "end": 143
              },
              "start": 137,
              "end": 143
            },
            "start": 133,
            "end": 143
          },
          "init": null,
          "definite": false,
          "start": 133,
          "end": 143
        }
      ],
      "declare": true,
      "start": 119,
      "end": 144
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "root",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 158
      },
      "start": 145,
      "end": 159
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 159
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Root",
    "start": 10,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 101,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "Root",
    "start": 110,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 119,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 127,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "root",
    "start": 133,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "Root",
    "start": 139,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 145,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "root",
    "start": 154,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  }
]
```
