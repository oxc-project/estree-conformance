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
        "name": "NS1",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 44,
                        "end": 50
                      },
                      "start": 42,
                      "end": 50
                    },
                    "start": 39,
                    "end": 50
                  },
                  "init": null,
                  "definite": false,
                  "start": 39,
                  "end": 50
                }
              ],
              "declare": false,
              "start": 35,
              "end": 51
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 28,
            "end": 51
          }
        ],
        "start": 22,
        "end": 53
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NS2",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 76
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 99,
                        "end": 105
                      },
                      "start": 97,
                      "end": 105
                    },
                    "start": 94,
                    "end": 105
                  },
                  "init": null,
                  "definite": false,
                  "start": 94,
                  "end": 105
                }
              ],
              "declare": false,
              "start": 90,
              "end": 106
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 83,
            "end": 106
          }
        ],
        "start": 77,
        "end": 108
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 55,
      "end": 108
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 109
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "NS1",
    "start": 18,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 28,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 35,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 39,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 55,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 63,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "NS2",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 83,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 90,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 94,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
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
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "NS1",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 11
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "NS1",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 11
          },
          "exportKind": "value",
          "start": 8,
          "end": 11
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "NS1",
            "optional": false,
            "typeAnnotation": null,
            "start": 13,
            "end": 16
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "NNS1",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 24
          },
          "exportKind": "value",
          "start": 13,
          "end": 24
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 26
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "NS2",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 38
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "NS2",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 38
          },
          "exportKind": "value",
          "start": 35,
          "end": 38
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "NS2",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 43
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "NNS2",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 51
          },
          "exportKind": "value",
          "start": 40,
          "end": 51
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 27,
      "end": 53
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "NS1",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 65
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "NNNS1",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 74
          },
          "exportKind": "value",
          "start": 62,
          "end": 74
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 54,
      "end": 76
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "NS2",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 88
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "NNNS2",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 97
          },
          "exportKind": "value",
          "start": 85,
          "end": 97
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 77,
      "end": 99
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 99
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "NS1",
    "start": 8,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "NS1",
    "start": 13,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 17,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "NNS1",
    "start": 20,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "NS2",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "NS2",
    "start": 40,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 44,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "NNS2",
    "start": 47,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "NS1",
    "start": 62,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 66,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "NNNS1",
    "start": 69,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 77,
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
    "value": "NS2",
    "start": 85,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 89,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "NNNS2",
    "start": 92,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  }
]
```
