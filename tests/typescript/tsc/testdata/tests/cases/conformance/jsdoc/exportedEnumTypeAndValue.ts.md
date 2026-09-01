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
            "name": "MyEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 41,
                  "end": 42
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 44,
                  "end": 45
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 41,
                "end": 45
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 50
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 52,
                  "end": 53
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 49,
                "end": 53
              }
            ],
            "start": 37,
            "end": 55
          },
          "definite": false,
          "start": 28,
          "end": 55
        }
      ],
      "declare": false,
      "start": 22,
      "end": 56
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 78
      },
      "exportKind": "value",
      "start": 57,
      "end": 79
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 80
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 22,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 28,
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
    "value": "a",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 57,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 64,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./def",
        "raw": "\"./def\"",
        "start": 19,
        "end": 26
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 27
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 58
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyEnum",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 67
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 69
            },
            "optional": false,
            "computed": false,
            "start": 61,
            "end": 69
          },
          "definite": false,
          "start": 57,
          "end": 69
        }
      ],
      "declare": false,
      "start": 51,
      "end": 70
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 70
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
    "value": "MyEnum",
    "start": 7,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 14,
    "end": 18
  },
  {
    "type": "String",
    "value": "\"./def\"",
    "start": 19,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 61,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  }
]
```
