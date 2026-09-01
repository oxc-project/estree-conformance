__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 15,
              "end": 16
            },
            "definite": false,
            "start": 11,
            "end": 16
          }
        ],
        "declare": false,
        "start": 7,
        "end": 17
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 18
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
    "value": "var",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17
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
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "myModule",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 25
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 42
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "importInsideModule_file1",
                  "raw": "\"importInsideModule_file1\"",
                  "start": 53,
                  "end": 79
                },
                "start": 45,
                "end": 80
              },
              "importKind": "value",
              "start": 32,
              "end": 81
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 90,
                    "end": 91
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 94,
                      "end": 97
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 98,
                      "end": 99
                    },
                    "optional": false,
                    "computed": false,
                    "start": 94,
                    "end": 99
                  },
                  "definite": false,
                  "start": 90,
                  "end": 99
                }
              ],
              "declare": false,
              "start": 86,
              "end": 100
            }
          ],
          "start": 26,
          "end": 102
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 102
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 102
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 102
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
    "value": "myModule",
    "start": 17,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 32,
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
    "value": "=",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 45,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 52,
    "end": 53
  },
  {
    "type": "String",
    "value": "\"importInsideModule_file1\"",
    "start": 53,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "var",
    "start": 86,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 92,
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
    "value": ".",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  }
]
```
