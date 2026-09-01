__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Enhancement",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 24
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getType",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 52
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ThisExpression",
                        "start": 72,
                        "end": 76
                      },
                      "start": 65,
                      "end": 77
                    }
                  ],
                  "start": 55,
                  "end": 83
                },
                "expression": false,
                "start": 52,
                "end": 83
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 31,
              "end": 83
            }
          ],
          "start": 25,
          "end": 85
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 85
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 85
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
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "Enhancement",
    "start": 13,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 31,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 38,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "getType",
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
    "type": "Punctuator",
    "value": ")",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 65,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  }
]
```
