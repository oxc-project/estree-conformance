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
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "weekend",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 37
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Friday",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 48,
                      "end": 54
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 48,
                    "end": 54
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Saturday",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 64,
                      "end": 72
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 64,
                    "end": 72
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Sunday",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 82,
                      "end": 88
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 82,
                    "end": 88
                  }
                ],
                "start": 38,
                "end": 94
              },
              "const": false,
              "declare": false,
              "start": 25,
              "end": 94
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 94
          }
        ],
        "start": 12,
        "end": 96
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 96
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 109
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 124
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 128
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "weekend",
                "optional": false,
                "typeAnnotation": null,
                "start": 129,
                "end": 136
              },
              "start": 127,
              "end": 136
            },
            "importKind": "value",
            "start": 116,
            "end": 137
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
                    "name": "bVal",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 159,
                          "end": 160
                        },
                        "typeArguments": null,
                        "start": 159,
                        "end": 160
                      },
                      "start": 157,
                      "end": 160
                    },
                    "start": 153,
                    "end": 160
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 164
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Sunday",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 165,
                      "end": 171
                    },
                    "optional": false,
                    "computed": false,
                    "start": 163,
                    "end": 171
                  },
                  "definite": false,
                  "start": 153,
                  "end": 171
                }
              ],
              "declare": false,
              "start": 149,
              "end": 172
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 142,
            "end": 172
          }
        ],
        "start": 110,
        "end": 174
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 98,
      "end": 174
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 174
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
    "value": "a",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 18,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 25,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "weekend",
    "start": 30,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "Friday",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "Saturday",
    "start": 64,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Sunday",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 98,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 116,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "weekend",
    "start": 129,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 142,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 149,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "bVal",
    "start": 153,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "Sunday",
    "start": 165,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  }
]
```
