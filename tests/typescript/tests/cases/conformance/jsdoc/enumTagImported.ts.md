__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 75
          },
          "init": {
            "type": "Literal",
            "value": "add",
            "raw": "'add'",
            "start": 78,
            "end": 83
          },
          "definite": false,
          "start": 71,
          "end": 83
        }
      ],
      "declare": false,
      "start": 65,
      "end": 83
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
            "name": "tost",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 135
          },
          "init": {
            "type": "Literal",
            "value": "remove",
            "raw": "'remove'",
            "start": 138,
            "end": 146
          },
          "definite": false,
          "start": 131,
          "end": 146
        }
      ],
      "declare": false,
      "start": 125,
      "end": 146
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 65,
  "end": 147
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 71,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "String",
    "value": "'add'",
    "start": 78,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 125,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "tost",
    "start": 131,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 136,
    "end": 137
  },
  {
    "type": "String",
    "value": "'remove'",
    "start": 138,
    "end": 146
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
            "name": "TestEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "TestEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "importKind": "value",
          "start": 9,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod1",
        "raw": "\"./mod1\"",
        "start": 25,
        "end": 33
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 33
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
            "name": "tist",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 68
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestEnum",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 79
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ADD",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 83
            },
            "optional": false,
            "computed": false,
            "start": 71,
            "end": 83
          },
          "definite": false,
          "start": 64,
          "end": 83
        }
      ],
      "declare": false,
      "start": 58,
      "end": 83
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 85
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
    "value": "TestEnum",
    "start": 9,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 20,
    "end": 24
  },
  {
    "type": "String",
    "value": "\"./mod1\"",
    "start": 25,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 58,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "tist",
    "start": 64,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "TestEnum",
    "start": 71,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "ADD",
    "start": 80,
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
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestEnum",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 43
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ADD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 55
                  },
                  "value": {
                    "type": "Literal",
                    "value": "add",
                    "raw": "'add'",
                    "start": 57,
                    "end": 62
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 52,
                  "end": 62
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "REMOVE",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 68,
                    "end": 74
                  },
                  "value": {
                    "type": "Literal",
                    "value": "remove",
                    "raw": "'remove'",
                    "start": 76,
                    "end": 84
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 68,
                  "end": 84
                }
              ],
              "start": 46,
              "end": 86
            },
            "definite": false,
            "start": 35,
            "end": 86
          }
        ],
        "declare": false,
        "start": 29,
        "end": 86
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 22,
      "end": 86
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 86
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 22,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 29,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "TestEnum",
    "start": 35,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "ADD",
    "start": 52,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "String",
    "value": "'add'",
    "start": 57,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "REMOVE",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "String",
    "value": "'remove'",
    "start": 76,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  }
]
```
