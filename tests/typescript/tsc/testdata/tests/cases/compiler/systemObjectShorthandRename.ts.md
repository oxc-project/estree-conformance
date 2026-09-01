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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "init": {
              "type": "Literal",
              "value": "X",
              "raw": "'X'",
              "start": 17,
              "end": 20
            },
            "definite": false,
            "start": 13,
            "end": 20
          }
        ],
        "declare": false,
        "start": 7,
        "end": 20
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 20
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 20
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
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "String",
    "value": "'X'",
    "start": 17,
    "end": 20
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "importKind": "value",
          "start": 8,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./x.js",
        "raw": "'./x.js'",
        "start": 16,
        "end": 24
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 24
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 34
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 39
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 39
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 38,
                "end": 39
              }
            ],
            "start": 37,
            "end": 40
          },
          "definite": false,
          "start": 32,
          "end": 40
        }
      ],
      "declare": false,
      "start": 26,
      "end": 40
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 54
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 54
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 52,
                "end": 54
              }
            ],
            "start": 51,
            "end": 55
          },
          "definite": false,
          "start": 47,
          "end": 55
        }
      ],
      "declare": false,
      "start": 41,
      "end": 55
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 65
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 69
          },
          "definite": false,
          "start": 63,
          "end": 69
        }
      ],
      "declare": false,
      "start": 57,
      "end": 69
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 77
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 83
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 83
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 81,
                "end": 83
              }
            ],
            "start": 80,
            "end": 84
          },
          "definite": false,
          "start": 76,
          "end": 84
        }
      ],
      "declare": false,
      "start": 70,
      "end": 84
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 84
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
    "value": "x",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 11,
    "end": 15
  },
  {
    "type": "String",
    "value": "'./x.js'",
    "start": 16,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 41,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 52,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 63,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 70,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 81,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84
  }
]
```
