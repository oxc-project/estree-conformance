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
        "name": "Moclodule",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 57
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
                "name": "Someinterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 94
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 105,
                      "end": 108
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 112,
                        "end": 116
                      },
                      "start": 110,
                      "end": 116
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 105,
                    "end": 117
                  }
                ],
                "start": 95,
                "end": 123
              },
              "declare": false,
              "start": 71,
              "end": 123
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 64,
            "end": 123
          },
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
                  "start": 132,
                  "end": 133
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 136,
                  "end": 138
                },
                "definite": false,
                "start": 132,
                "end": 138
              }
            ],
            "declare": false,
            "start": 128,
            "end": 139
          }
        ],
        "start": 58,
        "end": 141
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 38,
      "end": 141
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Moclodule",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 158
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 159,
        "end": 162
      },
      "abstract": false,
      "declare": false,
      "start": 143,
      "end": 162
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Moclodule",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 207
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
                "name": "Manager",
                "optional": false,
                "typeAnnotation": null,
                "start": 227,
                "end": 234
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 235,
                "end": 242
              },
              "abstract": false,
              "declare": false,
              "start": 221,
              "end": 242
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 214,
            "end": 242
          }
        ],
        "start": 208,
        "end": 244
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 188,
      "end": 244
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 38,
  "end": 244
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 38,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "Moclodule",
    "start": 48,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 64,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 71,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "Someinterface",
    "start": 81,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 105,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 112,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 128,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 136,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 143,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "Moclodule",
    "start": 149,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 188,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "Moclodule",
    "start": 198,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 214,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 221,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "Manager",
    "start": 227,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244
  }
]
```
